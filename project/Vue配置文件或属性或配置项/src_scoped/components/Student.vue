<template>
<div class="school">
    <h1>学生名称:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
</div>
</template>

<script>
 export default{
    name:'Student',
    data() {
        return {
            name:'陈中正',
            age:'18'
        }
    },
 }
</script>

<style  scoped>
    .school{
        border: 10px solid #bfc;
        background-color: antiquewhite;
    }    
</style>
