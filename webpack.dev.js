const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const autoprefixer = require('autoprefixer')

module.exports = {
  target: 'web',
  entry: path.join(__dirname, 'entry.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'assets/dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
        use: [{ loader: 'ignore-loader' }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.styl', '.css'],
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  stats: {
    colors: true,
    errorDetails: false
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/)
  ]
}
