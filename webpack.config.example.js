var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './example'
  ],
  output: {
    filename: 'example-bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }  
};
