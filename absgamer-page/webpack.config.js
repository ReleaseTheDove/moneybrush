const path = require('path')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
  target: 'web',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.css$/,
        use: ['vue-style-loader',
              {loader: 'css-loader', options: {importLoaders:1}},
              'postcss-loader']},
      {test: /\.(gif|jpe?g|png|svg)$/,
        use: [{loader: 'url-loader',
              options: {limit: 1024, name: '[name].[hash:7].[ext]'}}]},
      {test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']},
      {test: /\.jsx$/, loader: 'babel-loader'}
      // {loader: 'postcss-loader', options: { sourceMap: true}}, 
    ]
  },
  plugins: [
    new webpack.DefinePlugin(
      {'process.env': {NODE_ENV: isDev ? '"development"': '"production"'}}),
    new vueLoaderPlugin(),
    new HTMLPlugin()
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {errors: true},
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config