// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// [++++++++++++ begin +++++++++++++]
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueScroll from 'vuescroll'
import 'font-awesome/scss/font-awesome.scss'
import 'vuescroll/dist/vuescroll.css'
import './assets/css/common.scss'

Vue.use(ElementUI)

Vue.use(VueScroll, {ops: {bar: {background: '#C0C4CC'}}})

// [++++++++++++ end +++++++++++++]
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
