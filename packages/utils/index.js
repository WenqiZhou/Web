const context = require.context('./src', true, /\.js$/);
const keys = context.keys();

const utils = keys.reduce((memo, k) => {
  const key = k.match(/^\.\/(.*).js/);
  if (key && key[1]) {
    memo[key[1]] = context(k);
  }

  return memo;
}, {});

export default utils;
