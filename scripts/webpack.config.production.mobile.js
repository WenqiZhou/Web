const config = require('./webpack.config.production');
const webpack = require('webpack');

module.exports = (webpackConfig) => {
  webpackConfig = config(webpackConfig);
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.desktop': false,
    'process.env.mobile': true,
  }));

  webpackConfig.devtool = '#source-map';

  return webpackConfig;
};
