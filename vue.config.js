const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  indexPath: "admin.html",
  outputDir: path.resolve(__dirname, "../server/public"),
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000"
      }
    }
  }
};
