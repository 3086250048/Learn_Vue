<template>
<div class="school">
    <h1>学校名称:{{ name }}</h1>
    <h1>学校地址:{{ address }}</h1>
    <h1>学生信息:{{ msg }}</h1>
</div>
</template>

<script>
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
        this.$bus.$on('sendtoSchool',(a,b)=>{
            this.msg=a+b
        })
    },
    beforeDestroy(){
        this.$bus.$off('sendtoSchool')   
    }
 }
</script>

<style scoped>
    .school{
        border: 1px solid #bfc;
        background-color: antiquewhite;
    }    
</style>
