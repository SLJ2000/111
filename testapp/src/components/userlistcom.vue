<template>
    <div class="box">
        <h3>用户列表</h3>
        <ul>
            <li v-for="(item,index) in userList" @click="clickuser(index)" :key="index">
                <img :src="item.icon">
                <h3>{{item.username}}</h3>
                
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    props:['userList'],
    data(){
        return {

        }
    },
    methods:{
        clickuser:function(index){
            // $emit讲子组件的方法传给父组件
            this.$emit('clickuser',index)
            
        }
    }

}
</script>
<style>
    .box{
        width: 300px;
        height: 700px;
        background: skyblue;
    }
    .box ul li{
        display: flex;
        padding: 20px;
    }
    .box ul li img{
        width: 100px;
        height: 100px;
    }


</style>