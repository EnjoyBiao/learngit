import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Holst from '@/components/host/host'
import Password from '@/components/passworld/passwold'
import Regist from '@/components/regist/regist'
  import  Main from '@/components/mian'
import Host1 from  '@/components/host/host1'
import Host2 from  '@/components/host/host2'
import Host3 from  '@/components/host/host3'
import stickFooter from  '@/pages/stickyFooter/stickFooter'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/host',
      name: 'host',
      component: Holst,
      redirect:'/host/host2',
       children:[
         {
           path:'host1/:count',
           name:'host1',
           component:Host1
         },
         {
           path:'host2',
           name:'host2',
           component:Host2
         },
         {
           path:'host3',
           name:'host3',
           component:Host3
         },
       ]
    },
    {
      path: '/password',
      name: 'password',
      component: Password
    }
    ,
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    }
    ,
    {
      path: '/',
      redirect:'/host',
    },
    {
      path:'/stickFooter',
      name:'stickFooter',
      component:stickFooter
    }

  ]
})
