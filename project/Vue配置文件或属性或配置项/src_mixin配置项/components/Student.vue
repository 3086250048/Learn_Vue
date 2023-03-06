<template>
    <div>
        <h2>学生名称{{ name | timefmt }}</h2>
        <h2>学生年龄{{ age }}</h2>
        <button @click="showmsg">点击提示</button>
    </div>
</template>

<script>
//局部引入
// import {fun0,fun1,fun2} from '../mixin'
export default{
    name:'Student',
    data() {
        return {
            name:'陈中正',
            age:'18',
            y:999
        }
    },
    //局部注册
    // mixins:[fun0,fun1,fun2]
  
}
</script>