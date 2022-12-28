const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({
  plugins: [new MyPlugin(), new MyOtherPlugin()],
});
module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.[hash].js",
    clean: true,
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new htmlWebpackPlugin({
      title: "react web",
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
