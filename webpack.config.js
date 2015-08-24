var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  debug: true,
  
  entry: "./app/main.js",     

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },


  postcss: function () {
      return [autoprefixer];
  },
  
  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  }  
};