<template>
  <div>
    <h1>
      密码
    </h1>
    <button @click="back">返回</button>
  </div>

</template>
<script>
  export  default {
    name:'zhuye',
    data() {
      return {

      }
    },
    methods:{
      back(){
        this.$router.push('/')
        //this.$router.go(-1)
      }
    }
  }
</script>
<style>

</style>
