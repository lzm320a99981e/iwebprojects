import Cookies from 'js-cookie'
import Axios from 'axios'
import {Message} from 'element-ui'


// [+++++++++++++++++ 全局设置-开始 +++++++++++++++++]
/**
 * 请求前拦截
 */
Axios.interceptors.request.use(
  config => {
    let accessToken = Cookies.get('access-token');
    accessToken && (config.headers.accessToken = accessToken);
    return config;
  }
);

/**
 * 响应后拦截
 */
Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    showError();
    return Promise.reject(error);
  }
);
// [+++++++++++++++++ 全局设置-结束 +++++++++++++++++]

export default {
  get(url, params) {
    /**
     * 创建一个异步容器
     */
    new Promise(
      /**
       * 构建参数
       * @param resolve 成功通知
       * @param reject 失败通知
       */
      (resolve, reject) => {
        Axios.get(url, {
          params: {
            ...params,
            _t: new Date().getTime()
          }
        }).then(res => {
          if (res.status === 200) {
            if (res.data.code === '0') {
              resolve(res.data);
            } else {
              showError(res.data.message);
            }
          } else {
            showError();
            reject(res);
          }
        }).catch(err => {
          showError();
          reject(err)
        })
      }
    )
  },
  postBody() {

  },
  postForm() {

  }
}

/**
 * 显示错误信息
 * @param message
 */
function showError(message = '服务器返回失败') {
  Message.error({
    message: message,
    type: 'error',
    showClose: true,
    duration: 5000
  })
}
