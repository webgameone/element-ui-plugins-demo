import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
// import store from '@/store'


// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_URL, // url = base url + request url,//test:'/mock' prod:''
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // console.log(response,9999)
    if(response.status==200){
      return response.data;
    }
  },
  error => {
    // console.log('error2=====',error.response,error.response.data.message)
    // return;
    let errMsg;
    if(error.response&&error.response.status){
      switch (error.response.status) {
        case 400:
          Message({
            message: error.response.data&&error.response.data.message?error.response.data.message:'业务异常',
            type: 'warning'
          })
          return Promise.reject(error.response.data)
          break
        case 401:
          console.log('401鉴权失败！');
          //给父类发送消息
          window.parent.postMessage({type: '401error', data: false}, '*');
          // 清空db中用户数据
          router.push({
            name: 'login'
          })
          break
        case 403:
          errMsg = '当前操作没有权限'
          break
        case 404:
          errMsg = '未找到该资源'
          break
        case 405:
          errMsg = '请求方法未允许'
          break
        case 408:
          errMsg = '请求超时'
          break
        case 478:
          errMsg = '验证码错误,请重新输入'
          break
        case 479:
          errMsg = '演示环境，没有权限操作'
          break
        case 500:
          errMsg = '服务器端出错'
          break
        case 501:
          errMsg = '网络未实现'
          break
        case 502:
          errMsg = '网络错误'
          break
        case 503:
          errMsg = '服务不可用'
          break
        case 504:
          errMsg = '网络超时'
          break
        case 505:
          errMsg = 'http版本不支持该请求'
          break
        default:
          errMsg = '系统未知错误,请反馈给管理员'
          break
      }
    }else{
      errMsg='系统异常'
    }
    Message({
      message: errMsg,
      type: 'error',
      duration:10000
    })
  }
)
export default service
