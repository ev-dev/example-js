const path = require('path')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: path.join(__dirname, 'src', 'app', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src', 'app')
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
          path.resolve(__dirname, 'src', 'app'),
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
          path.resolve(__dirname, 'src', 'app', 'graphql')
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
    publicPath: path.join('/dist/')
  },
  plugins: isDev 
    ? [
        new LiveReloadPlugin({
          appendScriptTag: true
        })
      ] 
    : []
}
