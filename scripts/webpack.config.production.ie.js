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

  webpackConfig.resolve.alias['react-router-redux'] = 'react-router-redux-ie';
  webpackConfig.babel.presets.push('es3');

  webpackConfig.module.postLoaders = webpackConfig.module.postLoaders || [];
  webpackConfig.module.postLoaders.push([
    { test: /\.js$/, loaders: ['es3ify-loader'] }
  ]);

  webpackConfig.devtool = '#source-map';

  return webpackConfig;
};
