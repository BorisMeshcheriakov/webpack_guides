const ESLintPlugin = require('eslint-webpack-plugin');

const options = {
  extensions: ['.js', '.ts', '.tsx'],
};

const eslint = new ESLintPlugin(options);

module.exports = eslint;
