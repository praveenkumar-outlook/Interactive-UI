const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.join(__dirname, "public/js"),
    hashDigestLength: 10,
    filename: "[name].[hash].bundle.js"
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "public/index.html"),
      template: path.join(__dirname, "src/index.html")
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          babelrc: false,
          plugins: ["transform-object-rest-spread"],
          presets: [
            "env",
            "react"
          ]
        }
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        "file-loader"
      ]
    }, {
      test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
      use: [
        "file-loader"
      ]
    }]
  }
};

module.exports = config;
