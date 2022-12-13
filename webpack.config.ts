import * as path from "node:path";

import * as w from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"

const config: w.Configuration = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
};

export default config