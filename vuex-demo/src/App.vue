<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Nave from  './components/nave'
export default {
  name: 'App',
  data(){
    return {
      urlData:{
        shouye:'/host'
      }
    }
  },

  components:{
    Nave,
  }
}
</script>

<style>
  .active{
    color: red;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
 height: 100%;
}
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
