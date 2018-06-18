const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const LISTEN_PORT = 3000

module.exports = merge(
  {
    mode: 'development',

    devtool: 'inline-source-map',

    entry: {
      app: [
        `webpack-dev-server/client?http://0.0.0.0:${LISTEN_PORT}`,
        'webpack/hot/only-dev-server'
      ]
    },

    devServer: {
      publicPath: base.output.publicPath,
      historyApiFallback: true,
      stats: {
        colors: true,
        stats: 'verbose'
      },
      hot: true,
      port: LISTEN_PORT
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css'
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development',
        DEBUG: true
      }),
      new DashboardPlugin()
    ],

    module: {
      rules: [
        {
          test: /\.s?[ac]ss$/,
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/,
          loader: ['style-loader', 'css-loader?modules']
        }
      ]
    }
  },
  base
)
