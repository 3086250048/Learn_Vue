<template>
<!-- //组件的结构 -->
    <div class="box1">
        <h1>学校的名称叫:{{ name }}</h1>
        <h1>学校的地址为:{{ address }}</h1>
        <button @click="showname">点击我提示学校的历史</button>
    </div>
</template>

<script>
//组件交互相关的代码
export default {
    name:'School',
    data() {
        return {
            name:'浙江经济',
            address:'学正街66号'
        }
    },
    methods: {
        showname(){
            alert('办校于1988')
        }
    },
   
 }

</script>

<style>
/* 组件的样式 */
    .box1{
    width: 500px;
    height: 200px;
    background-color: #bfc;
    }
</style>