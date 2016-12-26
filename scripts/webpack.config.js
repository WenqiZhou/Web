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
      '11-store': resolve('./src/common/store'),
      $src: resolve('./src'),
      $common: resolve('./src/common'),
      $desktop: resolve('./src/desktop'),
      $mobile: resolve('./src/mobile'),
      '11-panel': 'panel-components',
      '11-common': 'components',
      '11-utils': 'utils',
      '11-mobile': 'mobile-components',
      '11-desktop': 'desktop-components',
    });
  webpackConfig.resolve.modulesDirectories = webpackConfig.resolve.modulesDirectories || [];
  webpackConfig.resolve.modulesDirectories.push(join(__dirname, '../packages/'));

  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push('syntax-export-extensions');

  //['panel-components', 'components', 'utils', 'mobile-components', 'desktop-component'].forEach((libraryName) => {
  //    webpackConfig.babel.plugins.push(['import', {
  //      libraryName,
  //      libraryDirectory: join(__dirname, `../packages/${libraryName}/src`)
  //    }]);
  //  }
  //);

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

  webpackConfig.module.loaders.forEach(function (loader, index) {
    // 这里的模块不需要prefix
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.exclude = /(packages|panel)/;
      loader.test = /\.less$/;
    }

    // 这里的模块需要prefix (node_modules好像不需要处理,但是issue中好像要求排除,其实不排除貌似也不会起作用)
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.include = /(packages|panel)/;
      loader.exclude = /node_modules/;
      loader.test = /\.less$/;
    }
  });

  return webpackConfig;
}
;
