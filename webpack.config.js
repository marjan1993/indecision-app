// const path = require("path");

// module.exports = {
//     entry: "./src/app.js",
//     output: {
//         path: path.join(__dirname, "public") ,
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [{
//             loader: "babel-loader",
//             test: /\.js$/,
//             exclude: /node_modules/
//         }, {
//             test: /\.s?css$/, //witch support css files and scss files
//             use: [
//                 "style-loader",
//                 "css-loader",
//                 "sass-loader"
//             ]
//         }]
//     },
//     devtool:"cheap-module-eval-source-map",
//     devServer: {
//         contentBase: path.join(__dirname, "public")
//     }
// };






const path = require('path');
const webpack = require("webpack");
const sourceMap = require('source-map');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.development" });
}

module.exports = (env) => {
  const isProduction = env === "production";
   return {
    entry: ['babel-polyfill', './src/app.js'],
    //entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
       options: {
          babelrc: false,
          presets:["@babel/preset-env", '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-proposal-class-properties"]
        },
      exclude: /(node_modules|bower_components)/,
      }, {
        test: /\.s?css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options:  {
                  sourceMap: true
                },
              },
              'css-loader',
              'sass-loader'
            ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin({filename: "styles.css", chunkFilename: 'main.css',})
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: "/dist/"
    },
    node: {
      fs: "empty"
    },
    performance : {
      hints : false
   }   
  };
};
