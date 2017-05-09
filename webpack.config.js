var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: './index.native.js',
  output: {
    libraryTarget: 'umd',
    library: 'WebNative',
    path: __dirname,
    filename: 'index.js',
  },
  target: 'node',
  externals: 'react',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react',
                    'es2016',
                    'stage-1',
                   ],
        },
      },
      {
        test: /\.scss?$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
