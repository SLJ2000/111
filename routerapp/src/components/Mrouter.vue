<template>
    <div>
        <h1>动态路由</h1>
        <p>{{msg}}</p>
        <button @click="show">显示ID</button>
    </div>
</template>
<script>
export default {
    name:'Mrouter',
    data(){
        return{
            msg:'我是动态路由'
        }
    },
    methods:{
       show(event){
            console.log(this)
        }
    }
    
}
</script>