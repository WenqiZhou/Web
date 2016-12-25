const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(key => key !== './index.js' && key !== './routers.js');

const routers = keys.reduce((memo, key) => {
  memo[key.match(/([^/]+)\.js$/)[1]] = context(key);
  return memo;
}, {});

export default routers;
