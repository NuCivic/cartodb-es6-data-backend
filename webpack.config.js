var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    library: 'Cartodb',
    libraryTarget: 'umd',
    filename: 'dist/bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
