import  Vue from  'vue'
import  Vuex from  'vuex'
Vue.use(Vuex);
export  default new Vuex.Store(
  {
    state:{
     count:1
    },
    getters:{
      isShow(state){
        return state.count;
      }
    },
    mutations:{
       change(state,sum){
           state.count+=sum;
       }
    },
    actions:{
       getchange(context,num){
        context.commit('change',num)
       }
    }



  }

)
