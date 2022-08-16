const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
//添加vue别名
        'vue$': 'vue/dist/vue.esm.js' 
      }
    }
}
})
