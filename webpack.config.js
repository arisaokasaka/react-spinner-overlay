const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./examples/src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "examples/src/index.html"),
      filename: './index.html'
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: true,
      eslint: {
        files: './src/**/*.{ts,tsx}'
      }
    })
  ],
  devServer: {
    port: 3010
  }
};
