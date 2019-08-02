<template>
    <div class="header">
      <!--<router-link class="item" to="/host" >首页</router-link>-->
      <!--<router-link :to="urlData.shouye">动态路由</router-link>-->
      <router-link class="item" e :to="{path:urlData.shouye}">动态二</router-link>
      <router-link class="item" to="/regist">登录</router-link>
      <router-link class="item" to="/password">密码</router-link>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        urlData:{
          shouye:'/host'
        }
      }
    }
  }
</script>

<style scoped>

  .header{
    display:flex;
    justify-content: space-around;
    align-items: center;
    height:50px;
    background-color: aqua;
  }
  .item{
    text-decoration: none;
    color: #2c3e50;
    font-size: 16px;
  }
  .content{
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .left{
    width: 100px;
    color: blue;
  }
  .right{
    flex:1 ;
    color: brown;
  }
</style>
