const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'node',
  mode: 'development',
  // 这里入口需要注意路径是相对谁
  entry: './src/server/index',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  // 调用该函数将node_modules中的包排除 减小打包生成文件的大小 这是针对node环境的(target:node)
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
  }
}