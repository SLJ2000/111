<template>
    <div>
        <h1>page2</h1>
        <p>{{msg}}</p>
        <button @click="gopage1">GOpage1</button>
    </div>
</template>
<script>
export default {
    name:'page2',
    data(){
        return{
            msg:'我是page2组件'
        }
    },
    methods:{
        gopage1(event){
            console.log(this)
            this.$router.push({
                path:'page1'
            })
        }
    }
}
</script>