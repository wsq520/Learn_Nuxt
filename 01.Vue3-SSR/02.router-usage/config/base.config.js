const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  mode: 'development',
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
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
  }
}