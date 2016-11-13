const webpack = require('atool-build/lib/webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { join, basename, resolve } = require('path');
const { sync } = require('glob');
const NpmInstallPlugin = require('npm-install-webpack-plugin-cn');

module.exports = (webpackConfig) => {
  webpackConfig.babel.plugins.push('transform-runtime');
  // webpackConfig.babel.plugins.push(['import', [
  //   {
  //     libraryName: 'antd',
  //     style: true,
  //   }
  // ]]);

  const files = sync('./src/entries/*.js');
  const newEntries = files.reduce(function (memo, file) {
    const name = basename(file, '.js');
    memo[name] = file;
    return memo;
  }, {});
  webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);

  webpackConfig.output.sourceMapFilename = '[name].map.js';

  webpackConfig.babel.plugins.push('lodash');
  webpackConfig.babel.plugins.push('add-module-exports');

  webpackConfig.plugins.push(new LodashModuleReplacementPlugin());

  webpackConfig.resolve = webpackConfig.resolve || {};
  webpackConfig.resolve.alias = Object.assign({},
    webpackConfig.resolve.alias || {},
    {
      $src: resolve('./src'),
      $common: resolve('./src/common'),
      $desktop: resolve('./src/desktop'),
      $mobile: resolve('./src/mobile')
    });

  // webpackConfig.module.loaders.push({
  //   test: /\.css$/,
  //   loader: 'style-loader!css-loader?importLoaders=1!autoprefixer-loader'
  // });

  return webpackConfig;
};
