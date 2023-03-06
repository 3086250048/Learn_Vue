<template>
    <div>
        <Student></Student>
        <input type="text" v-fbind:value="''" placeholder="请输入">
        <button @click="hello">hello</button>
    </div>
</template>


<script>
    import Student from './components/Student.vue'
    export default{
    name:'App',
    components:{
        Student:Student
    },
    }
</script>
