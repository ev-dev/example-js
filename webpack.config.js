const path = require('path')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['react-app']
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', 'font-awesome')
        ],
        use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(graphql|gql)$/,
        include: [
          path.resolve(__dirname, 'src', 'graphql')
        ],
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.scss', '.graphql', '.gql', '*']
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  devServer: {
    publicPath: path.join('/public/')
  },
  plugins: isDev 
    ? [
        new LiveReloadPlugin({
          appendScriptTag: true
        })
      ] 
    : []
}