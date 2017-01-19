// webpack component examples
const webpack = require('atool-build/lib/webpack');

module.exports = (webpackConfig) => {
  webpackConfig.entry = {
    index: [
      "./examples/entries/index.js"
    ]
  };

  webpackConfig.devtool = '#cheap-module-inline-source-map';

  return webpackConfig;
};
