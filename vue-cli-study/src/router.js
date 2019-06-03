import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      meta: {title: '主页'},
      component: resolve => require(['./components/Home'], resolve),
      children: [
        {
          path: '/dashboard',
          meta: {title: '主面板'},
          component: resolve => require(['./views/Dashboard'], resolve)
        },
        {
          path: '/table',
          meta: {title: '表格'},
          component: resolve => require(['./views/Table'], resolve)
        }
      ]
    }
  ]
})
