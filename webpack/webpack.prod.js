const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { paths } = require('./configuration');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
});
