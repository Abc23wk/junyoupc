import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 路由懒加载
const login = () => import("@/views/Login")
const register = () => import("@/views/register")
const vindex = () => import("@/components/index")
const talents = () => import("@/components/Talents")
const issue = () => import("@/components/issue")
const resume = () => import("@/components/resume")
const firm = () => import("@/components/firm")
const arrange = () => import("@/components/arrange")
const si = () => import("@/components/404")
const details = () => import("@/views/Details")
const particulars = () => import("@/components/Particulars")

// 路由动画
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/index',
      meta:{
        routeText:'首页',
        footer:true,
        header:true
      }
    },
    {
      path: '/index',
      name: 'vindex',
      component: vindex,
      meta: {
        index: 1,
        routeText:'首页',
        footer:true,
        header:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      mate: {
        requireAuth: true,//该路由需要拦截
        routeText:'登录',
        footer:true
      }
    },
    {
      path: '/talents',
      name: 'talents',
      component: talents,
      meta: {
        index: 2,
        requireAuth: false,//该路由不需要拦截
        routeText:'人才搜索',
        footer:true,
        header:true
      }
    },
    {
      path: '/issue',
      name: 'issue',
      component: issue,
      meta: {
        routeText:'发布职位',
        footer:true,
        header:true
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume,
      meta: {
        routeText:'人才简历',
        footer:true,
        header:true
      }
    },
    {
      path: '/firm',
      name: 'firm',
      component: firm,
      meta: {
        routeText:'我的企业',
        footer:true,
        header:true
      }
    },
    {
      path: '/arrange',
      name: 'arrange',
      component: arrange,
      meta: {
        routeText:'面试安排',
        footer:true,
        header:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        routeText:'注册',
        footer:true,
        header:false
      }
    },
    {
      path: '/details',
      name: 'details',
      component: details,
      meta: {
        routeText:'关于',
        footer:true,
        header:false
      }
    },
    {
      path: '/particulars',
      name: 'particulars',
      component: particulars,
      meta: {
        routeText:'职位详情',
        footer:true,
        header:true
      }
    },
    {
      path: '*',
      name: 'si',
      component: si,
      meta: {
        routeText:'404',
        footer:false,
        header:false
      }
    }
  ]
})
