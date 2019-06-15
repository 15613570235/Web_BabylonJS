var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
   entry: './src/SiderBar.tsx',
   output: {
      path: __dirname + '/dist',
      filename: "bundle.js",
      publicPath: "/dist/"
   },
   devtool: "source-map",
   resolve: {
      extensions: ['.ts', '.tsx', '.js']
   },
   devServer: {
      contentBase: '.',
      hot: true,
   },
   performance: {
      hints: "warning", // 枚举
      maxAssetSize: 30000000, // 整数类型（以字节为单位）
      maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
      assetFilter: function (assetFilename) {
         // 提供资源文件名的断言函数
         return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
      }
   },
   module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
            plugins: ['transform-runtime', ["import", {
               libraryName: "antd",
               style: "css"
            }]],
            presets: ['es2015', 'react', 'stage-2']
         },
      }, {
         test: /\.css$/,
         loader: "style-loader!css-loader"
      }, {
         test: /\.tsx?$/,
         loader: "ts-loader"
      }]
   },
   externals: {
      "react": "React",
      "react-dom": "ReactDOM"
   },
   mode: 'production',
   //自动打开浏览器
   plugins: [
      new OpenBrowserPlugin({
         url: 'http://localhost:8080/index.html'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
   ],
};