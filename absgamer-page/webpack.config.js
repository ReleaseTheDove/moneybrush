const path = require('path')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV === 'development'
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const config = {
  target: 'web',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
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
              options: {limit: 1024, name: '[name].[hash:8].[ext]'}}]},
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
  config.module.rules.push({test: /\.styl(us)?$/,
    use: ['style-loader', 'css-loader', 'stylus-loader']}
  )
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
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue'],
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push(
    {test: /\.styl(us)?$/,
      use: ExtractPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader',
              {loader: 'postcss-loader', options: { sourceMap: true}},
              'stylus-loader']
      })
    }
  )
  config.plugins.push(
    new ExtractPlugin('styles.[chunkhash:8].css'),
  )
  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: true
  }
}

module.exports = config