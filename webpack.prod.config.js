module.exports = {
    // 入口 可以有多个或者一个
    entry:{
        'main': './main.js'
    },
    // 出口
    output:{
        filename: './build.js'
    },
    // watch: true, // 文件监听自动产出build
    module:{ // 声明模块 包含各个loader
        loaders:[ // 新版本叫roles
            {
                test: '/\.css$/',
                loader: 'style-loader!css-loader'
            }
        ]
    }
}