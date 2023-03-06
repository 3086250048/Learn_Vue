<template>
<div class="student" >
    <h1>{{ msg }}</h1>
    <h1>学生名称:{{ name }}</h1>
    <h1>学生年龄:{{ my_age*12+1-100 }}</h1>
    <h1>学生性别:{{ sex }}</h1>
    <button @click="my_age+=1">点击加年龄</button>
</div>
</template>

<script>
 export default{
    name:'Student',
    data() {
        return {
          msg:'你好世界',
        my_age:this.age
        }
    },
    //简单声明接收
    // props:['name','sex','age']
    //接收时同时对数据进行类型限制
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number

    // }
    //接收的同时对数据:进行类型限制+默认值限制+必要性的限制
    props:{
        name:{
            type:String, //类型为字符串
            required:true // 名字必须传入
        },
        age:{
            type:Number, //类型为字符串
            default:99 // 名字必须传入
        },
        sex:{
            type:String, //类型为字符串
            required:true // 名字必须传入
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
