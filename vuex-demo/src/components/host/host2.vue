<template>
  <div>

    <h1>主页二</h1>
    <h4>query传参:{{$route.query.name}}</h4>

  </div>

</template>
<script>

  export  default {
    name:'host2',
    data() {
      return {

      }
    },
    components:{

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
