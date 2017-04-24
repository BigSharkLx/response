var debug = process.env.NODE_ENV !== "production";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src/js/index.js'),
  build: path.join(__dirname, 'dist'),
};
module.exports={
  context: path.join(__dirname),
  devtool:debug?"cheap-module-source-map":'',
  resolve: {
    extensions: ['.js', '.jsx', '.css'] //后缀名自动补全
  },
  entry: {
    main: PATHS.app,
  },
  output: {
    path: PATHS.build,
    publicPath:'/',
    filename:debug?'bundle.js':'bundle.min.js',
  },

  devServer:debug?{
    //使能历史记录api
    historyApiFallback:true,
    // hotOnly:true,
    stats:'errors-only',
    host:process.env.Host,
    port:process.env.PORT,
    overlay:{
      errors:true,
      warnings:true,
    }
  }:{},
  module:{
    rules:[
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015',] }
        }],
      },
    ]},
    plugins:debug? [
      new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]:[
      new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
       sourceMap: true,
       mangle: true,
        comments: false,
      }),
    ],
  };











  // const path = require('path');
  // const HtmlWebpackPlugin = require('html-webpack-plugin');
  // const webpack = require('webpack');
  //
  // const PATHS = {
  //   app: path.join(__dirname, 'src/js/index.js'),
  //   build: path.join(__dirname, 'dist'),
  // };
  // const commonConfig={
  //   resolve: {
  //     extensions: ['.js', '.jsx', '.css'] //后缀名自动补全
  //   },
  //  entry: {
  //     main: PATHS.app,
  //   },
  //   output: {
  //     path: PATHS.build,
  //     filename: 'bundle.js',
  //   },
  //    module:{
  //        rules:[
  //          {
  //            test: /\.js$/,
  //            use: [{
  //              loader: 'babel-loader',
  //              options: { presets: ['es2015',] }
  //            }],
  //          },
  //        ]},
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       filename:'index.html',
  //       template:'./src/index.html'
  //     }),
  //   ],
  // }
  // function developmentConfig(){
  //   const config ={
  //     devServer:{
  //       //使能历史记录api
  //       historyApiFallback:true,
  //      // hotOnly:true,
  //        stats:'errors-only',
  //       host:process.env.Host,
  //       port:process.env.PORT,
  //       overlay:{
  //         errors:true,
  //         warnings:true,
  //       }
  //     },
  //      plugins: [
  //       new webpack.HotModuleReplacementPlugin(),
  //       new webpack.NamedModulesPlugin(),
  //     ],
  //   };
  //    return Object.assign(
  //     {},
  //     commonConfig,
  //     config,
  //     {
  //       plugins: commonConfig.plugins.concat(config.plugins),
  //     }
  //   );
  // }
  //
  //
  // function deployConfig(){
  //   const config ={
  //     resolve: {
  //       extensions: ['.js', '.jsx', '.css'] //后缀名自动补全
  //     },
  //     entry: {
  //        main: PATHS.app,
  //      },
  //      output: {
  //        path: PATHS.build,
  //        filename: 'bundle.min.js',
  //      },
  //     module:{
  //       rules:[
  //         {
  //           test: /\.js$/,
  //           use: [{
  //             loader: 'babel-loader',
  //             options: { presets: ['es2015',] }
  //           }],
  //         },
  //     ]
  //   },
  //       plugins: [
  //         new webpack.optimize.UglifyJsPlugin({
  //           compress: {
  //             warnings: false,
  //           },
  //           comments: false,
  //         }),
  //       ],
  //   };
  //   return config;
  //
  // }
  // module.exports = function(env){
  //   console.log("env",env);
  //   if(env=='development'){
  //     return developmentConfig();
  //   }
  //   if(env=='production'){
  //     return deployConfig();
  //   }
  //    return commonConfig;
  // };
