const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  devtool: 'eval-source-map',

  // Output configuration
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans the output directory before emit
  },

  // Module rules for handling different file types
  module: {
    rules: [
      // CSS files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      // Images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  // Plugins
  plugins: [
    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      template: "./src/pages/template.html",
    }),
    new MiniCssExtractPlugin({ 
      filename: './src/styles/styles.css', 
    })
  ],

  // Development server configuration
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true, // Opens the browser after server had been started
  },
  resolve: {
    extensions: ['.js', '.css'] 
  },
};
