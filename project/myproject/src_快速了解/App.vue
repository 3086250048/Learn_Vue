<template>
    <div>
        <el-button >你好</el-button>
        <el-input v-model="text" placeholder="请输入内容" ></el-input>
        <el-date-picker
            v-model="data"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
    </div>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        School:School,
        Student:Student,
    },
    data() {
        return {
            text:'',
            data:''
        }
    },
    watch:{
        text(){
            console.log(this.text)
        },
        data(){
            console.log(this.data)
        }
    }
}

</script>