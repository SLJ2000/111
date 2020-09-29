<template>
  <div id="app">
    
    <img  src="./assets/logo.png">
    <div>
    <router-link  to="/">home</router-link> |
    <router-link to="/page2">page2</router-link> |
    <router-link to="/page1">page1</router-link> |
    <router-link to="/Mrouter">动态路由</router-link> |
    <a @click="hreftwo">跳转新页面</a>
    </div>
   
     <router-view/>
  </div>
</template>

<script>
export default {
  // watch监听
  watch:{
    '$route':function(val){
      console.log('路由发生更改')
    }
  },

  name: 'App',
  methods:{
    go(event){
      console.log(event)
    },
    hreftwo(){
      this.$router.push({path:'/page404'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
