<template>
  <div>
     <input type="date">
     <h1>主页一</h1>
    <H4>接受的参数{{$route.params.count}}</H4>
     <button @click="stickfooter">'stickfooter'</button>
  </div>

</template>
<script>
  export  default {
    name:'host1',
    data() {
      return {

      }
    },
    methods:{
      stickfooter(){
        this.$router.push('/stickFooter')
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
