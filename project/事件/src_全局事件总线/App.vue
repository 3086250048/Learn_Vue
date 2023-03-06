<template>
    <div>
        <h1>{{ msg }}</h1>
        <School></School>
        <Student></Student>
        
    </div>
</template>


<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default{
    name:'App',
    components:{
        School:School,
        Student:Student
    },
    data() {
        return {
            msg:'你好'
        }
    },
    }
</script>

<style>
 h1{
    background-color:antiquewhite;
 }
</style>