const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const webpackConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
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
  plugins: [new BundleAnalyzerPlugin()],
};
module.exports = smp.wrap(webpackConfig);
