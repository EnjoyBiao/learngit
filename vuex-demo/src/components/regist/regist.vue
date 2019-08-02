<template>
<div class="main" ref="page">

    <Nave></Nave>


  <div class="content">
  <div class="left">
     <h4>登录</h4>
  </div>
  <div class="right">

  </div>
  </div>
</div>

</template>
<script>
   import  Nave from  '../nave'
  export  default {
    name:'zhuye',
    data() {
      return {
        clientHeight:'',
      }
    },
    activated(){
        console.log('dddd');
    },
    mouted(){
      this.clientHeight = `${document.documentElement.clientHeight}`;//获取浏览器可视区域高度
      let that = this;
      window.onresize = function(){
        this.clientHeight =  `${document.documentElement.clientHeight}`;
        if(that.$refs.page){
          that.$refs.page.style.minHeight = clientHeight - 100 + 'px';
        }
      }
    },
    watch:{
      clientHeight(){     //如果clientHeight 发生改变，这个函数就会运行
        this.changeFixed(this.clientHeight)
      }
    },
    methods:{
      changeFixed(clientHeight){
        if(this.$refs.page){
          this.$refs.page.style.height = clientHeight -100 + 'px';
        }
      }
    },
    components:{
      Nave,
    }
  }
</script>
<style scoped>

  .main{
     position: relative;

  }
  .header{
     height: 50px;
     position: relative;
  }
  .content{
    flex: 1;
    display: flex;
    flex-flow: row;
    height: calc(100%);
  }
  .left{
    background-color: darkgreen;
    width: 200px;
  }
  .right{
    background-color: rosybrown;
    flex: 1;
  }
</style>
