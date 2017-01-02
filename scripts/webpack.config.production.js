const config = require('./webpack.config');
const webpack = require('webpack');

module.exports = (webpackConfig) => {
  webpackConfig = config(webpackConfig);
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.api': JSON.stringify('/api/'),
    'process.env.desktop': true,
    'process.env.mobile': true,
    production: true
  }));

  webpackConfig.devtool = '#source-map';

  return webpackConfig;
};
