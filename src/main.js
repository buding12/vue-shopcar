import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入bootstrap库
import 'bootstrap/dist/css/bootstrap.css'

//全局绑定该属性
import axios from 'axios'
// 2.基础地址
axios.defaults.baseURL = 'https://www.escook.cn'
// 3.axios方法添加到Vue的原型
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
 