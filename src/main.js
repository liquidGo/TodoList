import Vue from 'vue'
import App from './App.vue'
import './index.css'
Vue.config.productionTeip = false
//启动一个vue 应用
//创建一个vue根组件实例对象
new Vue({
  render: createElement => createElement(App),
}).$mount('#app')


