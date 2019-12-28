import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/ index.css'
import './registerServiceWorker'
import axios from 'axios'
require('./mock.js');
// import config from './config/config.js'
Vue.prototype.axios = axios;//axios不支持Vue.use()的声明方式,所以要用Vue的原型方式聲明

Vue.config.productionTip = false;
//引入ElementUI 组件引用到实例
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

/*var instance = axios.create({
    // baseURL: '/api',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
    host:'127.0.0.1',
    port: 8080
});*/
