const webpack = require('atool-build/lib/webpack');
const config = require('./webpack.config');

module.exports = () => config({
  output: {},
  babel: {
    plugins: []
  },
  plugins: [],
  resolve: {}
});
