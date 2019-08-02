// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store/store'
import Axios from  'axios'
import  QS from  'qs'
/* eslint-disable no-new */
Vue.prototype.HOST='/api';
//Axios.defaults.baseURL = 'http://www.wwtliu.com/sxtstu'; // 配置axios请求的地址
///Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/*拦截器*/
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
   if (config.method==='post'){
     config.data=QS.stringify(config.data)
   }
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('响应=='+response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


  Vue.directive('focus',{
    inserted:function (e) {
      e.focus()
    }
  })
  Vue.prototype.$axios=Axios;
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
