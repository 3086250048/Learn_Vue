<template>
<div class="school">
    <h1>学校名称:{{ name }}</h1>
    <h1>学校地址:{{ address }}</h1>
    <button @click="send">点击</button>

</div>
</template>

<script>
 export default{
    name:'School',
    props:['reciveSchool'],
    data() {
        return {
            name:'浙江经济',
            address:'学正街66号'
        }
    },
    methods:{
        send(){
            this.reciveSchool(this.name)
        },
       
    }
 }
</script>

<style scoped>
    .school{
        border: 1px solid #bfc;
        background-color: antiquewhite;
    }    
</style>
