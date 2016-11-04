import fetch from '../../libs/request';

const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js' && item !== './types.js');

const _ = {
  upperFirst: require('lodash/upperFirst')
};

const types = {};

const requests = keys.reduce((memo, key) => {
  const mod = context(key);
  key = key.match(/([^/]+)\.js$/)[1];

  Object.keys(mod).filter(k => k !== 'prefix').forEach((k) => {
    const regExp = new RegExp(`^(${mod.prefix}|${_.upperFirst(mod.prefix)})?`);

    let apiKey = _.upperFirst(k).replace(regExp, _.upperFirst(mod.prefix));
    if (types[apiKey]) {
      apiKey = `${_.upperFirst(mod[k].method.toLowerCase())}${apiKey}`;
    }
    types[apiKey] = [mod.prefix, k].join('/');
    types[[mod.prefix, k].join('/')] = apiKey;
    memo[[mod.prefix, k].join('/')] = mod[k];
    memo[apiKey] = mod[k];
  });

  return memo;
}, {});

const request = ({ url, profile, data }) => {
  return fetch(profile.url || url, {
    method: profile.method || 'GET',
    data
  }).then(profile.callback || (response => response));
};

const dispatcher = (key, data) => {
  if (!requests[key]) {
    throw new Error('no api matched');
  }
  return request({ url: key, profile: requests[key], data });
};

export const Requests = requests;

export const Types = types;

export default dispatcher;
