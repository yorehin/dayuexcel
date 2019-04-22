/**
 * Created by Administrator on 2017/12/20.
 */
import axios from 'axios';
import router from '../router'

// 验证登录拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.push('/adminLogin')
          break;
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

export default {


  // 检查版本更新
  versionUpdate(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'delService')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },






  // 登录
  login(params){
    return new Promise((resolve,reject)=>{
      axios.post(baseURL + 'adminLogin',params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
  // 删除服务
  delService(){
    return new Promise((resolve,reject)=>{
      axios.get(baseURL + 'delService')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },

  // 删除发展历程
  delTime(params){
    return new Promise((resolve,reject)=>{
      axios.post(baseURL + 'delTime',params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    })
  },
















  // verifyCaptcha(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'verifyCaptcha',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // create_mes(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'create_mes',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // updateSort(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'updateSort',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getCNav(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getCNav?id='+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // delNav(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'del_nav',{id})
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getAll(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getAll')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getArt(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getArt?id='+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getArtDetail(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'article/'+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // saveArt(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'save_art',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // delArt(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'del_art',{id})
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // //  notice
  // saveNotice(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'notice',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getNotices(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getnotice')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getCommonNav(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getcommonnav')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getFloors(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'floor')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getInfo(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'getinfo')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // indexPage(){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'indexPage')
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // getNoticeDetail(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.get(baseURL + 'notice/'+id)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // hideNotice(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'hidenotice',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // delNotice(id){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'del_notice',{id})
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // },
  // uploadImg(params){
  //   return new Promise((resolve,reject)=>{
  //     axios.post(baseURL + 'upload',params)
  //       .then((response) => {
  //         resolve(response.data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   })
  // }
}
