const webpack = require('atool-build/lib/webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { join, basename } = require('path');
const { sync } = require('glob');

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

  webpackConfig.output.sourceMapFilename= '[name].map.js';

  webpackConfig.babel.plugins.push('lodash');

  webpackConfig.plugins.push(new LodashModuleReplacementPlugin());

  return webpackConfig;
};
