const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

// css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const smp = new SpeedMeasurePlugin();

const webpackConfig = {
  entry: "./index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.[hash].js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: ["/node_modules"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
        exclude: ["/node_modules"],
      },
      {
        test: /\.(ts|js)x?$/,
        use: [{ loader: "babel-loader" }],
        exclude: ["/node_modules"],
      },
      {
        test: /\.(woff|woff2|ttf|eot|png|jpg|svg|gif)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.[hash].css",
    }),
    new BundleAnalyzerPlugin(),
    new htmlWebpackPlugin({
      title: "react web",
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
module.exports = smp.wrap(webpackConfig);
