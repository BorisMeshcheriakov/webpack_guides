const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { paths, config } = require('./configuration');
const { eslintWebpackPlugin } = require('./plugins');

const devServer = {
  open: true,
  compress: false,
  port: config.PORT,
  host: config.HOST,
  hot: true,
  client: {
    progress: true,
  },
  static: [
    {
      watch: true,
      directory: paths.dist,
    },
  ],
};

const plugins = [eslintWebpackPlugin];

const dev = {
  plugins,
  devServer,
  devtool: 'cheap-module-source-map',
};

module.exports = merge(common, dev);
