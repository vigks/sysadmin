module.exports = {
    devServer: {
        proxy: {
            '/renren-security': {
                target:'http://47.92.173.68/',
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    '^/renren-security':'/renren-security'
                }
            }
        }
    }
}