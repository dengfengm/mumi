import axios from 'axios'
 
axios.defaults.timeout = 3 * 1000;
axios.default.baseUrl = 'http://localhost:8000'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
 
const WHITE_URL = [
    '/api/v1/getProList'
]
 
// 添加请求拦截器
axios.interceptors.request.use((req) => {
   if(WHITE_URL.includes(req.url)) return req;
//    if(!store.product.isLogin) {
//        location.href = '/login'
//    }
   return req;
    // 在发送请求之前做些什么
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});
 
// 添加响应拦截器
axios.interceptors.response.use((response) => {
    // 对响应数据做点什么
    return response;
}, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
});
 
class Axios {
    get(path, params) {
        return axios.get(path, params).then((res) => {
            console.log('path = ', path, 'params =' , params, 'res = ' ,res)
            return res
        }).catch((error) => {
            console.log(path , error)
            return error
        })
    }
    post(path, params) {
        return axios.post(path, params).then((res) => {
            return res
        }).catch((error) => {
            return error
        })
    }
}
 
export default new Axios();