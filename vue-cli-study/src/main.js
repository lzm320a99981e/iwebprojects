import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 关闭生成模式下产生提示
Vue.config.productionTip = false;

// axios
import axios from 'axios'

Vue.prototype.$axios = axios;

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {size: 'small'});

// babel
import 'babel-polyfill'

// 全局事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
