const config = require('./webpack.config.test');
const webpack = require('webpack');
const serverConfig = require('./webpack.config.server');

module.exports = (webpackConfig) => {
  webpackConfig = config(webpackConfig);
  webpackConfig = serverConfig(webpackConfig);

  return webpackConfig;
};
