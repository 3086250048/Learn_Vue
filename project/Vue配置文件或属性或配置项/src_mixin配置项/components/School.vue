<template>
    <div>
        <h2>学校名称{{ name }}</h2>
        <h2>学校地址{{ address }}</h2>
        <button @click="showmsg">点击提示</button>
    </div>
</template>

<script>
//局部引入
// import {fun0,fun1,fun2} from '../mixin' 
export default{
    name:'School',
    data() {
        return {
            name:'浙江经济',
            address:'学正街66号',
            x:999
        }
    },
    //局部注册
    // mixins:[fun0,fun1,fun2]
}
</script>