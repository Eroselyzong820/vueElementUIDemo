//
// import axios from 'axios'
// import qs from 'qs'
//
// //配置api地址
// const baseUrl = 'http://localhost:8081'
// //axios设置key都是默认的不允许改动的
// const $ajax = axios.create({
//     baseURL:baseUrl,
//     timeout:5000
// });/**/
//
// // axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://localhost:8080';
//
// // 设置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded'
//
// //POST传参序列化
// axios.interceptors.request.use((config) => {
//     if(config.method === 'post'){
//         config.data = qs.stringify(config.data);
//     }
//     return config;
// },(error) =>{
//     alert("错误的传参");
//     return Promise.reject(error);
// });
// //code状态码200判断
// axios.interceptors.response.use((res) =>{
//     console.log(res);
//     //对响应数据做些事
//     if(res.status  !=200){
//         // alert(res.data.msg);
//         return Promise.reject(res);
//     }
//     return res;
// }, (error) => {
//     //404等问题可以在这里处理
//     alert("网络异常", 'fail');
//     return Promise.reject(error);
// });
// export default axios;
//
// export function fetch(url, params) {
//     return new Promise((resolve, reject) => {
//         axios.get(url, params)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err);
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })
// }
// //这种方式 调用时 只需要在钩子函数中 return fetch('/xx/xx/xxx', params);