var webpack = require('karma-webpack');
var karmaAsync = require('karma-jasmine-async');

module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine' ],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/fetch-polyfill/fetch.js',
      'tests/**/*_spec.js'
    ],
    plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-spec-reporter'],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'tests/**/*_spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: [ 'spec' ],
    webpack: {
      module: {
        loaders: [{
          test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
          loader: 'babel-loader'
        }]
      }
    },
    webpackMiddleware: { noInfo: true }
  });
};
