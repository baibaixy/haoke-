import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 5000
})
// 拦截器
// 在请求或响应被then或catch处理前拦截它们
// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = token
    }
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
export default request
