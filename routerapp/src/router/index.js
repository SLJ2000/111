import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page1 from '../components/page1.vue'
import page2 from '../components/page2.vue'
import Mrouter from '../components/Mrouter.vue'
import newsCom from '../components/newsView.vue'
import VideoView from '../components/children/Video.vue'
import ImageView from '../components/children/Image.vue'
import bignews from '../components/bignews.vue'
import childCom from '../components/childCom.vue'
import page404 from '../components/page404.vue'
Vue.use(Router)
// 引入

export default new Router({
  //定义routes路由的集合，数组类型
  
  routes: [
    {
      path:'*',
      component:page404
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path:'/page1',
      name:'page1',
      component:page1
    },
    {
      path:'/page2',
      name:'page2',
      component:page2
    },
    {
      path:"/Mrouter",
      name:'Mrouter',
      component:Mrouter
    },
    // 动态路由，绑定个ID，
    { 
      path:"/Mrouter/:id",
      
      component:Mrouter
    },
    {
      path:"/news",
      name:'newsCom',
      component:newsCom
    },
    {
      path:"/news/:id",
      component:newsCom
    },
    // 嵌套路由 + 路由跳转
    {
      path:"/bignews/:id",
      name:'bignews',
      component:bignews,
      children:[
        {
          path:"Video",
          component:VideoView
        },
        {
          path:"Image",
          component:ImageView
        }
    ]
    },
    // 路由组件之间的传参
    {
      path:'/childCom/:id',
      name:'childCom',
      component:childCom,
    //   props:true
      props:function(route){
        console.log(route)
        return {id:route.params.id,username:route.query.username}
     },
    }
    
    
  ]
})
