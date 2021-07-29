const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CONTENT_TYPES = ["SEACORENLP", "SGNLP"]

module.exports = () => {
  const CONTENT_TYPE = process.env.CONTENT_TYPE;
  if (!CONTENT_TYPES.includes(CONTENT_TYPE)) {
    throw new Error(
      `Unknown CONTENT_TYPE: ${CONTENT_TYPE}, choose one of ${CONTENT_TYPES}`
    );
  }

  return {
    entry: "./src/index.tsx",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        favicon: "./src/public/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: "./src/components/output/highlight/HighlightContainer.css",
      }),
      new webpack.DefinePlugin({
        GTM_ID: JSON.stringify(process.env.GTM_ID),
        CONTENT_TYPE: JSON.stringify(CONTENT_TYPE)
      }),
    ],
  };
};
