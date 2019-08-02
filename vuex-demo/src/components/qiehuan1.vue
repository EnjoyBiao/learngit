<template>
  <div>
    <br>
     <h3>自定义指令</h3>
    <input type="text" v-focus>
    <p v-my-scss>我是局部指令</p>
    <h3>axios的使用</h3>
  </div>
</template>
<script>
  import Qs from 'qs'
  export  default {
    name:'qihuan1',
    data() {
      return {

      };
    },
    directives:{
      myScss:{
        inserted(e){
          e.style.color='red'
        }
      }
    },
    created() {
      //  let  url='/news/juhenews.php';
      // this.$axios.get(url,{
      //     params:{
      //       type:'junshi',
      //       count:10
      //     }
      // }
      //  )
      //   .then(function (res) {
      //      // console.log(res.data)
      //   })
      //   .catch(function (erro) {
      //       console.log(erro)
      //   });
      // let post_url='/blueberrypai/login.php'
      //  this.$axios.post(post_url,{
      //    user_id:'iwen@qq.com',
      //    password:'iwen123',
      //    verification:'crfvw'
      //  })
      //    .then(res=>{
      //     //console.log(res.data)
      //    })
      //    .catch(erro=>{
      //      console.log('请求失败')
      //    });
        //跨域处理
      let url_get=this.HOST+'/movie/in_theaters'
        console.log('url===='+url_get)
        this.$axios.get(url_get,{
          start:0,
          count:10,
          city:'成都'
        })
          .then(res=>{
             console.log(res)
          })
          .catch(erro=>{

          })
    }
  }
</script>
