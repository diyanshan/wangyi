//引入axios包
import axios from 'axios'

//封装发送ajax模块
export default  function ajax (url, data={}, method='GET'){
  //返回promise对象  可以.调用
  return new Promise( (resolve, reject) => {
    let promise
    if (method ==='GET') {
      //get的第二个参数是一个{}，然后这个对象的params属性值是一个参数对象的
      promise = axios.get(url,{params:data})
    }else {
      promise = axios.post(url,data)
    }
    promise
      .then(response => {
        //成功
        resolve(response.data)
      })
      .catch(error => {
        //失败
        alert('请求错误: '+error.message)
      })
  })
}
