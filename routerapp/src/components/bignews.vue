<template>
    <div>
        <h1>BIGNEWS</h1>
        <button @click="gotoEvent">跳转到PAGE1</button>
        <router-view/>
    </div>
</template>
<script>
export default {
    name:'bignews',
    data(){
        return{
            
        }
    },
    methods:{
        gotoEvent(event){
            this.$router.push({
                path:'/page1',
                query:{
                    username:"xiaoming",
                    password:"888664"
                }

            })
        }
    }
}
</script>