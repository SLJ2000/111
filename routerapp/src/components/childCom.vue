<template>
    <div>
        
        <p>{{id}}</p>
        <p>{{username}}</p>
    </div>
</template>
<script>
export default {
    name:'childCom',
    props:['id','username'],
    
    mounted(){
            console.log(this)
            
        }
    

}
</script>