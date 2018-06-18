const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(base, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    path: path.join(
      __dirname,
      'build',
      `production_created_${new Date().toISOString()}`
    ),
    filename: '[name].bundle.[chunkhash].js'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        extractComments: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader?modules']
      }
    ]
  }
})
