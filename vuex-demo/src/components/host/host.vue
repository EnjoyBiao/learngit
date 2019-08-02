<template>
  <div>
    <nave></nave>
    <div class="left">
        <h4> <router-link :to="{name:'host1',params:{count:100}}">主页1</router-link></h4>
       <h4><router-link :to="{path:'/host/host2',query:{name:'query传参'}}">主页2</router-link></h4>
       <h4><router-link to="/host/host3">主页3</router-link></h4>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>

</template>
<script>
  import Nave from  '../nave'
    export  default {
      name:'zhuye',
      data() {
        return {

        }
      },
      components:{
        Nave,
      }
    }
</script>
<style scoped>
  .left{
   height: 700px;
   background-color: darkslategrey;
    position: relative;
    float: left;
    width:200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right{
    height: 700px;
   background-color: aliceblue;
    position: relative;
    overflow: hidden;
  }
</style>
