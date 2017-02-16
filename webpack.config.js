var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'raw-loader'],
      include: path.join(__dirname, 'src/styles')
    }]
  }
}
