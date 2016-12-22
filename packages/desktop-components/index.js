const _ = {
  upperFirst: require('lodash/upperFirst')
};

const context = require.context('./src', true, /index\.js$/);
const keys = context.keys();

const components = keys.reduce((memo, k) => {
  const key = k.match(/^\.\/(.*)\/index.js/);
  if (key && key[1]) {
    memo[_.upperFirst(key[1])] = context(k);
  }

  return memo;
}, {});

export default components;
