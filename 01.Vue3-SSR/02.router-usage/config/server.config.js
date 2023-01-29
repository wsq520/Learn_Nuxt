const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
  target: 'node',
  entry: './src/server/index',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  externals: [nodeExternals()]
})