<template>
   <div class="main">
      <header class="header">
      </header>
       <div class="content"></div>
     <footer class="footer"></footer>
   </div>
</template>
<script>
  // import Host from  './components/host/host.vue'
  // import Passworld from  './components/passworld/passwold.vue'
  // import Regist from  './components/regist/regist.vue'
   export default {
     name:'main',
     data(){
       return{

       }
     },
     component:{


     }
   }
</script>
<style scoped>
   .main{
     position: relative;
     display: flex;
     flex-direction: column;
   }
  .header{
    display: flex;
     align-items: center;
  }
</style>
