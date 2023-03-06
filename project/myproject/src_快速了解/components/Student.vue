<template>
    <!-- //组件的结构 -->
    <div class="box0">
        <h1>学校的名称叫:{{ name }}</h1>
        <h1>学校的年龄为:{{ age }}</h1>
        <button @click="showname">点击我提示学生的信息</button>
    </div>
</template>
    
<script>
//组件交互相关的代码
export default {
    name: 'Student',
    data() {
        return {
            name: '陈中正',
            age: '18'
        }
    },
    methods: {
        showname() {
            alert('出生于浙江')
        }
    },

}

</script>
    
<style>
/* 组件的样式 */
.box0 {
    width: 500px;
    height: 200px;
    background-color: #bfc;
}
</style>