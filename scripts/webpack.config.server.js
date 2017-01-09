const WebpacAddModuleExports = require("webpack-add-module-exports");
const webpack = require('webpack');
const { resolve } = require('path');

module.exports = (webpackConfig) => {
  webpackConfig.plugins.push(new WebpacAddModuleExports({
    fileRegExp: /\.js$/
  }));

  // 防止输出样式
  // 同时将所有文件打包到一起导出 使node能够引入
  webpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
    return plugin.chunkNames !== 'common';
  });

  webpackConfig.module.loaders.push({
    loader: "ignored-loader",
    test: /\.(css|less|scss)$/
  });

  webpackConfig.resolve.alias.autofetch = resolve('./node_modules/autofetch/src/index.node.js');

  webpackConfig.devtool = null;

  webpackConfig.entry = {
    reducers: ['./src/common/store/reducers/index.js'],
    routers: ['./src/common/routers/index.js']
  };

  webpackConfig.target = 'node';
  webpackConfig.node = {
    __filename: true,
    __dirname: true
  };

  return webpackConfig;
};