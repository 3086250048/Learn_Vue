<template>
    <div>
        <Student name="李三" sex="女" :age="18"></Student>
        <Student name="李四" sex="女" :age="22"></Student>
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
