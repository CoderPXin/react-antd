const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//导入生成html文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //独立打包css文件插件
 
//创建一个插件实例
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),//模板文件
    filename: 'index.html'//生成文件名
})

const cssPlugin = new MiniCssExtractPlugin({//选项与htmlPlugin类似
  filename: "index.css"
})


module.exports = {
    mode: 'development', //development  production ( 生产环境会将代码压缩 )
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        src: path.resolve(__dirname, 'src')
      },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: {
                  loader: "babel-loader"
                }
            },
            // 解析css文件  
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']// use从右往左写  
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] // compiles Less to CSS
              }
        ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.HotModuleReplacementPlugin(),
      htmlPlugin,
      cssPlugin
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      inline:true,//热加载
      hot: true,
      port: 9000
    }
}