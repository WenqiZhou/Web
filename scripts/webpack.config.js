const webpack = require('atool-build/lib/webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { join, basename, resolve } = require('path');
const { sync } = require('glob');
const NpmInstallPlugin = require('npm-install-webpack-plugin-cn');

module.exports = (webpackConfig) => {
  webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => !(plugin instanceof NpmInstallPlugin));

  webpackConfig.resolve = webpackConfig.resolve || {};
  webpackConfig.resolve.alias = Object.assign({},
    webpackConfig.resolve.alias || {},
    {
      $src: resolve('./src'),
      $common: resolve('./src/common'),
      $desktop: resolve('./src/desktop'),
      $mobile: resolve('./src/mobile'),
      '11-panel': 'panel-components',
      '11-common': 'components',
      '11-utils': 'utils',
      '11-mobile': 'mobile-components',
      '11-desktop': 'desktop-components'
    });
  webpackConfig.resolve.modulesDirectories = webpackConfig.resolve.modulesDirectories || [];
  webpackConfig.resolve.modulesDirectories.push('./packages');

  webpackConfig.babel.plugins.push('transform-runtime');

  ['11-panel', '11-common', '11-utils', '11-mobile', '11-desktop'].forEach((libraryName) => {
    webpackConfig.babel.plugins.push(['import', {
      libraryName,
      libraryDirectory: 'src'
    }]);
  });

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

  // webpackConfig.module.loaders.push({
  //   test: /\.css$/,
  //   loader: 'style-loader!css-loader?importLoaders=1!autoprefixer-loader'
  // });

  return webpackConfig;
};
