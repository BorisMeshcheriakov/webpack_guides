const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { paths } = require('./configuration');
const { miniCssExtractPlugin } = require('./plugins');

const plugins = [miniCssExtractPlugin];

module.exports = merge(common, {
  plugins,
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
});
