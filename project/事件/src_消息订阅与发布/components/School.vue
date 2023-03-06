<template>
<div class="school">
    <h1>学校名称:{{ name }}</h1>
    <h1>学校地址:{{ address }}</h1>
    <h1>学生信息:{{ msg }}</h1>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
 export default{
    name:'School',
    data() {
        return {
            name:'浙江经济',
            address:'学正街66号',
            msg:''
        }
    },
    mounted(){
        // this.$bus.$on('sendtoSchool',(a,b)=>{
        //     this.msg=a+b
        // })
      this.pubid=pubsub.subscribe('hello',(msgname,data)=>{
            this.msg=data
        })
    },
    beforeDestroy(){
        // this.$bus.$off('sendtoSchool')   
        pubsub.unsubcribe(this.pubid)
    }
 }
</script>

<style scoped>
    .school{
        border: 1px solid #bfc;
        background-color: antiquewhite;
    }    
</style>
