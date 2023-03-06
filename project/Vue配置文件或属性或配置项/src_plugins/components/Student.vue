<template>
<div class="student" >
    <h1>{{ msg | mySlice }}</h1>
    <h1>学生名称:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    
</div>
</template>

<script>
 export default{
    name:'Student',
    data() {
        return {
          msg:'你好世界aaaaaaaa',
          name:'陈中正',
          age:'18',
          sex:'男'
       
        }
    }
  
}
</script>

<style>
    .student{
        border: 1px solid #bfc;
        background-color: antiquewhite;
    }    
</style>
