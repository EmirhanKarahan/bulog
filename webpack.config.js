const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = (env) => {
  const isProduction = env.production;
  return {
    devtool: isProduction ? "source-map" : "inline-source-map",
    mode: isProduction ? "production" : "",
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.resolve(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "styles.css" }),
      new Dotenv({ path: `./.env.${process.env.NODE_ENV}` }),
      ...(isProduction
        ? [
            new webpack.EnvironmentPlugin([
              "FIREBASE_DATABASE_URL",
              "FIREBASE_API_KEY",
              "FIREBASE_AUTH_DOMAIN",
              "FIREBASE_PROJECT_ID",
              "FIREBASE_STORAGE_BUCKET",
              "FIREBASE_MESSAGING_SENDER_ID",
              "FIREBASE_APP_ID",
            ]),
          ]
        : []),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      watchContentBase: true,
      historyApiFallback: true,
      publicPath: "/dist/",
    },
  };
};
