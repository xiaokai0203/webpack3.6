const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口 可以有多个或者一个
    entry:{
        'main': './src/main.js'
    },
    // 出口
    output:{
        path: path.resolve('./dist'), // 相对转绝对 因为path需要接受绝对路径
        filename: 'build.js'
    },
    // watch: true, // 文件监听自动产出build
    module:{ // 声明模块 包含各个loader
        loaders:[ // 新版本叫roles
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader?limit=99999999'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/, // 排除node_modules
                options: { // 参数 类似于？传参 
                    presets: ['env'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // 插件执行顺序与元素索引有关
        new HtmlWebpackPlugin({
            template: './src/index.html', // 参照物
        })
  
    ]
}
// open hot prot inline process