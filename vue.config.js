
module.exports = {
    publicPath: './',
    outputDir: process.env.NODE_ENV,
    lintOnSave: true,
    chainWebpack: () => {},
    configureWebpack: () => {},
    productionSourceMap: true,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        // stats: 'none',
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'https://test.kuaijianzhiliao.com/api',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    },
    pluginOptions: {}
}
