const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // development or production, determined by node env
  entry: "./index.tsx", // entry file
  devtool: "inline-source-map", // dev tool
  output: {
    path: path.resolve(__dirname, "public"), // output path
    filename: "main.js",
    clean: true,
  },
  target: "web",
  devServer: {
    port: "3000", // dev server port
    static: ["./public"], // This property tells Webpack what static file it should serve
    open: true, //  opens the browser after server is successfully started
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true,
    liveReload: true, // disable live reload on the browser. "hot" must be set to false for this to work
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output MANAGEMENTT",
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
    ],
  },
};
