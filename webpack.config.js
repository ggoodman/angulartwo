var Webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",
  entry: "./angulartwo",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "angulartwo.js",
    library: "angulartwo",
    libraryTarget: "umd",
  },
  plugins: [
    new Webpack.optimize.DedupePlugin(),
    // new Webpack.optimize.UglifyJsPlugin(),
  ]
};