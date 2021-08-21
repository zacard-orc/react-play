const path = require('path');
const firstPlugin = require('./wp_plugin/helloPg');

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
  plugins: [new firstPlugin()],
};
