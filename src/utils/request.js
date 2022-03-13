import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
let loading = null
// 创建axios实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_PROXY_PREFIX,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 50000 // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
})
// 添加请求拦截器
instance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  if (store.getters.token) {
    config.headers.common.Authorization = `${store.getters.token}` // Bearer
  }
  loading = Toast.loading({
    forbidClick: true,
    duration: 0
  })
  return config
}, function(error) {
  loading.clear()
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
  loading.clear()
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  console.log('response', response)
  if (response.data.code !== '10000') {
    if (response.data.code === '90004') {
      store.dispatch('user/resetToken').then(() => {
        location.reload()
      })
    } else {
      // 请求时调用轻提示
      Toast.fail(response.data.msg || '网络异常')
    }
  }
  return response
}, function(error) {
  loading.clear()
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
