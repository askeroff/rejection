const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

process.noDeprecation = true;

module.exports = {
  
  entry: './src/js/index.js', 
  devtool: 'source-map', 
  context: __dirname,
  target: 'web', 
  stats: 'errors-only',
  watch: true,


  output: {
    path: path.resolve(__dirname, './dist'), 
    filename: 'js/[name].[chunkHash].js', 
    publicPath: '/', 
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],

        loader: 'babel-loader',

        options: {
          presets: ['es2015']
        },
      },
      {
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
                use: 'css-loader'
           })
      }
    ]
  },

  plugins: [
    new WebpackMd5Hash(),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: true,
    port: 8080
}

}

