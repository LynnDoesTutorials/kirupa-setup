const webpack = require("webpack");
const path = require("path");
const DEV = path.resolve(__dirname, "dev");
const OUTPUT = path.resolve(__dirname, "output");

let config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  module: {
    rules: [{
      include: DEV,
      loader: "babel-loader",
    }]
  }
};

module.exports = config;