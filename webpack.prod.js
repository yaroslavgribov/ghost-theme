var webpack = require('webpack');
var config = require('./webpack.dev');

config.output.filename = 'main.js';
config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: false}));

module.exports = config;