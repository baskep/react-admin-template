import axios from 'axios'
import { getUserToken, removeUserToken, removeUserInfo } from '@/utils/auth'
import { Message } from 'antd'

//创建一个axios示例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/' : '',
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 让每个请求携带token-- ['authorization']为自定义key
    config.headers.authorization = getUserToken()
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (!res || res.status === 403) {
      const { href } = window.location
      Message.error('登录过期，请重新登录')
      removeUserToken()
      removeUserInfo()
      setTimeout(() => {
        window.location.href = `/login?url=${encodeURIComponent(href)}`
      }, 1000)
    }
    return Promise.resolve(res)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
