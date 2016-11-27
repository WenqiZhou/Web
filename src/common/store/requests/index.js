import template from 'string-template';
import fetch from '../../libs/request';
import Store from '../../store';

const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js' && item !== './types.js');

const types = {};

const requests = keys.reduce((memo, key) => {
  const mod = context(key);
  key = key.match(/([^/]+)\.js$/)[1];

  Object.keys(mod).filter(k => k.toLowerCase() !== 'prefix').forEach((k) => {
    // 判断请求类型是否重复
    if (memo[k]) {
      throw new Error(`Duplicate Request Type: ${k} in ${key}`)
    }
    memo[k] = mod[k];
    types[k] = k;
  });

  return memo;
}, {});

const request = ({ profile, headers = {}, query = {}, data = {}, params = {} }) => {
  // 需要处理profile.headers中的数据
  // 这些数据默认是需要手动处理的
  const { path, headers: profileHeaders, params: profileParams } = profile;
  let realPath = path;

  headers = new Headers(headers);

  headers.set('Content-Type', headers.get('Content-Type') || 'application/json');

  if (profileHeaders && typeof profileHeaders === 'object') {
    // 需要将profileHeaders中的内容全部遍历到headers中
    Object.keys(profileHeaders).forEach((key) => {
      let value;
      let source;
      const header = profileHeaders[key];
      const seted = headers.get(key);
      // 判断是否已设置必须

      // 如果在请求中已设置header,那就不用管了
      if (seted) {
        return;
      }

      // 未设置则报错 (header配置不支持false)
      if (typeof header !== 'object' && !seted) {
        throw new Error(`${key} is required`);
      }

      // 如果headers类型是除false以外的
      if (typeof header === 'string') {
        source = value = header;
      } else if (typeof header === 'object') {
        source = header.source;
        value = header.default;
      } else {
        throw new Error(`header profile of ${key} must be String or Object`);
      }

      // 获取source中的数据,没有则返回value (同时也实现了header直接为返回值的情况)
      value = source.split('.')
        .reduce((previousValue, currentKey, index, array) => {
          const v = previousValue[currentKey];
          // v为空的时候,由于reduce必须要遍历到最后一个
          return v || (index === array.length - 1) ? v : {};
        }, Store.getState()) || value;

      // 设置header
      headers.set(key, value);
    });
  }

  // 判断地址中是否需要进行模板替换
  if (path.match(/\{(.*)}/)) {
    // 进行字符串模板替换
    const parsedProfileParams = Object.keys(profileParams || {}).reduce((previous, key) => {
      if (params[key]) return profileParams;

      const param = profileParams[key];
      let source;
      let value;
      if (typeof param === 'string') {
        source = value = param;
      } else if (typeof param === 'object') {
        source = param.source;
        value = param.default;
      } else {
        throw new Error(`Url params profile of ${key} must be String or Object`);
      }

      // 获取source中的数据,没有则返回value
      value = source.split('.')
        .reduce((previousValue, currentKey, index, array) => {
          const v = previousValue[currentKey];
          return v || (index === array.length - 1) ? v : {};
        }, Store.getState()) || value;

      previous[key] = value;

      return previous;
    }, {});

    params = {
      ...parsedProfileParams,
      ...params
    };

    realPath = template(realPath, params);
  }
  return fetch(realPath, {
    method: profile.method || 'GET',
    headers,
    query: {
      ...query,
      xxx: ''
    },
    data
  }).then(profile.callback || (response => response));
};

const dispatcher = ({ key, ...props }) => {
  if (!requests[key]) {
    throw new Error('no api matched');
  }
  return request({ key, profile: requests[key], ...props });
};

export const Requests = requests;

export const Types = types;

export default dispatcher;
