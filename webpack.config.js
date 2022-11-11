const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const webpack = require("webpack")
const reactLoadableTransformer = require('react-loadable-ts-transformer');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: "./src/index.tsx",
    // Runtime code for hot module replacement
    // hot: "webpack/hot/dev-server.js",
    // Dev server client for web socket transport, hot and live reload logic
    // client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  }, 
  // devtool: "eval",
  devServer: { 
    static: path.join(__dirname, "dist") 
  },
  // devServer: {
  //   // static: path.join(__dirname, "public"),
  //   // compress: true, // enable gzip compression
  //   // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  //   // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  //   // https: false, // true for self-signed, object for cert authority
  //   // noInfo: true, // only errors & warns on hot reload
  // },
  plugins: [
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({ // disable for production
      // title: "Development",
      // filename: "test.html",
      template: path.join(__dirname, "src", "index.html"),
    })
    // new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   title: "Development",
    // }),
    // new webpack.DllPlugin({
    //   path: "./dist/manifest.json",
    //   entryOnly: true
    // }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require("./dist/manifest.json") // eslint-disable-line
    // }),
  ],
  module: {
    // rules: [
    //   {
    //     test: /\.tsx?$/,
    //     use: [
    //       {
    //         loader: "ts-loader",
    //         options: {
    //           transpileOnly: true,
    //         }
    //       }
    //     ],
    //     exclude: /node_modules/,
    //     include: path.resolve(__dirname, "src"),
    //     // type: "javascript/auto",
    //   },
    //   // {
    //   //   test: /\.css$/,
    //   //   use: ["style-loader", "css-loader"],
    //   // },
    // ],
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({ before: [reactLoadableTransformer] }),
          },
        },
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src/")],
    extensions: [".tsx", ".ts", ".js"],
    symlinks: false, // not using  symlinks
    // cacheWithContext: false // for using custom resolving plugins, that are not context specific
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: path.resolve(__dirname, "public"),
    // library: { // There is also an old syntax for this available (click to show)
    //   type: "umd", // universal module definition
    //   // the type of the exported library
    //   name: "MyLibrary", // string | string[]
    //   // the name of the exported library

    //   /* Advanced output.library configuration (click to show) */
    // },

  },


  // performance: {
  //   hints: "warning", // enum
  //   maxAssetSize: 200000, // (in bytes, default: 250000)
  //   maxEntrypointSize: 400000, // (in bytes, default: 250000)
  //   assetFilter: function(assetFilename) {
  //     return assetFilename.endsWith(".css") || assetFilename.endsWith(".ts") || assetFilename.endsWith(".tsx");
  //   }
  // },
  // stats: {
  //   preset: "errors-only",
  //   env: true,
  //   outputPath: true,
  //   publicPath: true,
  //   assets: true,
  //   entrypoints: true,
  //   chunkGroups: true,
  //   chunks: true,
  //   modules: true,
  //   children: true,
  //   logging: true,
  //   loggingDebug: "./webpack/",
  //   loggingTrace: true,
  //   warnings: true,
  //   errors: true,
  //   errorDetails: true,
  //   errorStack: true,
  //   moduleTrace: true,
  //   builtAt: true,
  //   errorsCount: true,
  //   warningsCount: true,
  //   timings: true,
  //   version: true,
  //   hash: true,
  // },
  // experiments: {
  //   asyncWebAssembly: true,
  //   // WebAssembly as async module (Proposal)
  //   syncWebAssembly: true,
  //   // WebAssembly as sync module (deprecated)
  //   outputModule: true,
  //   // Allow to output ESM
  //   topLevelAwait: true,
  //   // Allow to use await on module evaluation (Proposal)
  // },
  // optimization: {
  //   chunkIds: "size",
  //   // method of generating ids for chunks
  //   moduleIds: "size",
  //   // method of generating ids for modules
  //   mangleExports: "size",
  //   // rename export names to shorter names
  //   minimize: true,
  //   // minimize the output files
  //   minimizer: [new CssMinimizerPlugin(), "..."],
  //   // minimizers to use for the output files

  //   /* Advanced optimizations (click to show) */

  //   splitChunks: {
  //     cacheGroups: {
  //       "my-name": {
  //         // define groups of modules with specific
  //         // caching behavior
  //         test: /\.sass$/,
  //         type: "css/mini-extract",

  //         /* Advanced selectors (click to show) */

  //         /* Advanced effects (click to show) */
  //       }
  //     },

  //     fallbackCacheGroup: { /* Advanced (click to show) */ }

  //     /* Advanced selectors (click to show) */

  //     /* Advanced effects (click to show) */

  //     /* Expert settings (click to show) */
  //   }
  // },

 }

