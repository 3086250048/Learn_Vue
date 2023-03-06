<template>
<div class="school">
    <h1>学生名称:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
    <button @click="send">将信息发给School</button>
</div>
</template>

<script>
import pubsub  from 'pubsub-js';
 export default{
    name:'Student',
    data() {
        return {
            name:'陈中正',
            age:'18',
            
        }
    },
    methods:{
        send(){
            // this.$bus.$emit('sendtoSchool',this.name,this.age)
            pubsub.publish('hello',666)
        }
        
    }

 }
</script>

<style  scoped>
    .school{
        background-color: antiquewhite;
    }    
</style>
