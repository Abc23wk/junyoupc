import axios from 'axios'

const service = axios.create({
  baseURL: `https://jy.baifanapi.com`,
  timeout: 5000
})
service.interceptors.request.use(
  config => {
    config.headers['X-Token'] = 'job'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 20000) {
      return Promise.reject()
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
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