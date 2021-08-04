<template>
    <div>
        <h1>新闻页面</h1>
       
        <button @click="show">显示ID</button>
        <h1>{{msg}}</h1>

    </div>
</template>
<script>
export default {
    name:'newsCom',
    data(){
        return{
            msg:''
        }
    },
    methods:{
       show(event){
            console.log(this.$root.$route.params.id)
            this.msg=this.$root.$route.params.id
        }
    }
    
}
</script>