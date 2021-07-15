const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.resolve(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "styles.css" }),
      new Dotenv({path:`./.env.${process.env.NODE_ENV}`})
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
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
