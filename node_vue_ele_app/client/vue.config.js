const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port:8080,
    proxy: {
      '/api': { 
        target: 'http://localhost:5000/api/', // 后台接口域名
        changeOrigin: true, // 是否允许跨域 设置为true
        pathRewrite: {  // 重写域名
          '^/api': ''
        }
      },
    }
  }
}

