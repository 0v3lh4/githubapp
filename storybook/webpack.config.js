// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path')
const webpackDev = require('../webpack.dev')

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard-loader'
    },
    {
      test: /\.s?[ac]ss$/,
      include: path.join(__dirname, '../src'),
      exclude: /node_modules/,
      loader: ['style-loader', 'css-loader?modules']
    }
  )

  storybookBaseConfig.resolve = webpackDev.resolve

  return storybookBaseConfig
}
