<template>
    <div class="chat">
        <h3>{{currentuser.username}}</h3>
        
        <div class="show"></div>
        <div class="enter"></div>
        <input type="submit" name="send" id="send" value="发送">
    </div>
</template>
<script>
export default {
    props:['currentuser'],
    data(){
      return {
          

      }
    } 

}
</script>
<style class="chat" >
    .chat{
        width: 500px;
        height: 700px;
        border: 1px solid ;
        background: skyblue;
    }
    .show{
        width:530px;
        height:350px;
        border: 1px solid;
        margin-bottom: 20px;
    }
    .enter{
        width:530px;
        height:220px;
        border: 1px solid;
    }
    .chat input{
        float: right;
        margin-right: 20px;
        margin-top: 10px;
    }
</style>