const config = require('./webpack.config.development');
const webpack = require('webpack');
const serverConfig = require('./webpack.config.server');

module.exports = (webpackConfig) => {
  webpackConfig = config(webpackConfig);
  webpackConfig = serverConfig(webpackConfig);

  return webpackConfig;
};
