const config = require('./webpack.config');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (webpackConfig) => {
  webpackConfig = config(webpackConfig);
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.api': JSON.stringify('/'),
    production: true
  }));

  webpackConfig.devtool = '#source-map';

  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    startAnalyzer: true,
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json'
  }));

  return webpackConfig;
};
