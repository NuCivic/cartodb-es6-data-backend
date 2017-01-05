/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
