
import Vue from 'vue'
import App from './App'
import router from './router'

import 'amfe-flexible/index.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/state.js'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

// 路由拦截
router.beforeEach((to, from, next) => {
  const user = store.state.user
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (user) { // 通过vuex state获取当前的用户名是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
