const path = require('path')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      favicon: paths.public + '/favicon.ico',
      template: paths.public + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json', 'ts', 'tsx'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
