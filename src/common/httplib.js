import axios from 'axios' // 导入axios
import {
  apiRoot
} from './config' //导入config文件
import {
  prompt
} from './utils' //错误提示
import {
  HttpStatus
} from './httpStatus'  //Token 验证

axios.defaults.baseURL = apiRoot // 设置基础url
axios.defaults.timeout = 30000 // 请求超时时间设置
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

// http request 请求拦截器
axios.interceptors.request.use(
  config => {
      config.headers['X-Token'] = 'job00000000000000000000000000000'
      return config;
  },
  err => {
      return Promise.reject(err);
  });


// http response 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 对响应错误做点什么
    console.log('from interceptor: ' + error)
    if (error && error.response) {
      switch (error.response.status) {
        // ===================================
        case HttpStatus.noPermission.code:
          prompt(HttpStatus.noPermission.message)
          break
        default:
          break
      }
    }
    return Promise.reject(error)
  })

// 重点内容
const HttpLib = {
  get: async function (url, params = null) {
    try {
      let res = await axios.get(url, {
        params,
      })
      return res.data // 返回内容，根据后台返回数据 自行调整
    } catch (error) {
      console.log(error.message)
    }
  },
  post: async function (url, data = {}) {
    try {
      let res = await axios.post(url, data)

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  },
  delete: async function (url, params) {
    try {
      let res = await axios.delete(url, {
        params
      })

      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export {
  HttpLib
}
