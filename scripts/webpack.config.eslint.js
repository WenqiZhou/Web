const webpack = require('atool-build/lib/webpack');
const config = require('./webpack.config');

module.exports = () => {
  const webpackConfig = {
    output: {},
    babel: {
      plugins: []
    },
    plugins: [],
    resolve: {}
  };

  return config(webpackConfig);
};
