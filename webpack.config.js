var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015'
          ],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      }
    ]
  }
}
