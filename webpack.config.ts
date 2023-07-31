import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";


const config: webpack.Configuration & DevServerConfiguration = {
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.tsx')
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};

export default config;
