const config = require('./webpack.config.production');
const webpack = require('webpack');
const serverConfig = require('./webpack.config.server');

module.exports = (webpackConfig) => {
  webpackConfig = config(webpackConfig);
  webpackConfig = serverConfig(webpackConfig);

  return webpackConfig;
};
