const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'none',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: path.resolve('build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}