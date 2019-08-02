<template>
  <div>
    我是子组件
    <h3> 接受父组件{{title}}</h3>
    <button @click="chuan">子组件传值</button>
    <slot name="slot1">我是插槽1</slot>
    <slot name="slot2" text="我是插槽子数据">我是插槽2</slot>
    <br>
    <h3>组件切换</h3>
    <button @click="qiehuan">点击切换</button>
     <component v-bind:is="currentTab"></component>
  </div>
</template>
<script>
  import qiehuan1 from  './qiehuan1'
  import qiehuan2 from  './qiehuan2'
  export  default {
    name:'child',
    data(){
      return {
        data:'laizi子组件',
        data1:[123,234],
        currentTab:'qiehuan1',
        tab:true
      }
    },
    props:{
      title:{
        default:'mig',
        type:[String,Number]
      }
    },
    methods:{
      chuan(){
        this.$emit('fromchild',this.data)
      },
      qiehuan(){
       if(this.tab){
        this.currentTab='qiehuan2'
         this.tab=!this.tab;
       }  else {
         this.currentTab='qiehuan1'
         this.tab=!this.tab;
       }
      }
    },
    components:{
      qiehuan1,
      qiehuan2,
    }

  }
</script>
<style scoped></style>
