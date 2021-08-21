const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve(__dirname, './wp_plugin/opsConsole.js')],
      },
    ],
  },
};
