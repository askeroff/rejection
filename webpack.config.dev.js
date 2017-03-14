const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


process.noDeprecation = true;

module.exports = {
  
  entry: './src/js/index.js', 
  devtool: 'source-map', 
  context: __dirname,
  target: 'web', 
  stats: 'errors-only',
 // watch: true,


  output: {
    path: path.resolve(__dirname, './dist'), 
    filename: 'js/bundle.js', 
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
        use: ['css-loader', 'style-loader']
      },
      {
        test: /\.css$/,
        //include: helpers.root('src', 'app'),
        use: ['raw-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist/"),
    compress: true,
    port: 8080
}

}

