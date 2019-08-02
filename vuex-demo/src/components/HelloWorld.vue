<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <template v-if="isOk">{{demo}}</template>
      <template v-else>我是else</template>
      <!--<h3>{{this.$store.dispatch('getchange',4)}}</h3>-->
        <h3>{{isshow}}</h3>
        <p>{{data_child}}</p>
      <input type="text" v-model="pass_child">
     <child :title="pass_child" @fromchild="getchild" >
       <div slot="slot1">
         <h3 >插槽12</h3>
       </div>

       <h4 slot="slot2" slot-scope="props">插槽2{{props.text}}</h4>
     </child>

    </div>
  </div>
</template>

<script>
  import  {mapGetters } from  'vuex'
  import  child from './Props'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      demo:'默认值',
      name:'',
      isOk:true,
      pass_child:123,
      data_child:'',
    }
  },
  components:{
    child
  },
  methods:{
    getchild(data){
      this.data_child=data
    }
  },
  watch:{

  },
  computed:{


    ...mapGetters(
      {
        isshow:'isShow'
      }
    )
  },
  mounted() {
    this.demo=this.$store.state.count;

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
