const webpack = require('atool-build/lib/webpack');
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

  return webpackConfig;
};
