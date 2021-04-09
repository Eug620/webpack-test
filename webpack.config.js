const path = require('path')
const HtmlPlugin = require('html-webpack-plugin') 
const MiniCssPlugin = require('mini-css-extract-plugin') // 打包css库
module.exports = {
    mode: "development",
    devServer: {
        open: true,
        host: 'localhost',
        port: 9999,
        contentBase:path.resolve(__dirname,'dist')
    },
    entry: path.resolve(__dirname,'./src/index.js'), // 输入
    output:{
        path: path.resolve(__dirname,'dist'), // 输出
        filename:'js/bundle.js' // 输出路径及文件名
    },
    plugins:[
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new MiniCssPlugin({
            filename: 'css/bundle.css'
        })
    ],
    module:{
        // css 处理插件
        rules:[
            {test:/\.css$/,use:[MiniCssPlugin.loader,'css-loader']},
            {test:/\.less$/,use:[MiniCssPlugin.loader,'css-loader','less-loader']},
            {test:/\.scss$/,use:[{
                loader: MiniCssPlugin.loader,
                options:{publicPath: '..'}
            },'css-loader','sass-loader']},
            {
                test:/\.(jpg|png|gif)$/,loader:'url-loader',
                options:{
                    limit:20480,// 小于20k转base64格式
                    name: '[name].[ext]',
                    output:'img'
                }
            },
            {
                test:/\.html$/,loader: 'html-loader'
            }
        ],
    }
}