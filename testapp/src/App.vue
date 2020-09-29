<template>
  <div id="app">
    
    <div class="content">
      <chat-com :currentuser="currentuser"></chat-com>
      <userList-com @clickuser='toggleuser' :userList='userlist'></userList-com>
    </div>
    
  </div>
</template>
<script>
import chatCom from './components/chatcom'
import userListCom from './components/userlistcom'
export default {
  name: 'App',
  components:{    
    chatCom,userListCom
  },
  data(){
    return {
      
      userlist:[
        {
          username:'小明',
          icon:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1600332506&di=cce17d921a1ffb73e042f196b512a8c5&src=http://b-ssl.duitang.com/uploads/item/201702/21/20170221093746_LUZhN.thumb.700_0.jpeg',
          num:123
        },
        {
          username:'小红',
          icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600342592289&di=454c53f98786660e9c2203ff7948e116&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F01a2f0440f53d4ffcb29ad89e2230bc17a86c1e615b26-oc3MCA_fw236',
          num:1234
        },
        {
          username:'小黄',
          icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600342592289&di=ed427906b068067f218358175ed8c68f&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181227%2F20%2F1545913225-peZfgxKFPt.jpeg',
          num:12356
        },
      ],
      currentuser:{
        username:'小明',
        icon:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1600332506&di=cce17d921a1ffb73e042f196b512a8c5&src=http://b-ssl.duitang.com/uploads/item/201702/21/20170221093746_LUZhN.thumb.700_0.jpeg',

      }
    }
  },
  methods:{
    toggleuser:function(index){
      console.log(index)
      console.log(this.userlist[index].username)
      this.currentuser.username=this.userlist[index].username
    }
  }
}
</script>
<style>
  .content{
    width: 800px;
    height: 750px;
    margin: 100px;
    display: flex;
    margin: 0 auto;
  }
</style>
