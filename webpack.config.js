const path = require('path');

module.exports = {
  
  entry: "src/js/index.js", 
  devtool: "source-map", 
  context: __dirname,
  target: "web", 
  stats: "errors-only",

  output: {
    path: path.resolve(__dirname, "src"), 
    filename: "bundle.js", 
    publicPath: "/", 
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],

        loader: "babel-loader",

        options: {
          presets: ["es2015"]
        },
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 9000
  }


}

