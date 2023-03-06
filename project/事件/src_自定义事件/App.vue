<template>
    <div class="box0">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现:子组件给父组件传递数据 -->
        <School :reciveSchool="reciveSchool"></School>
        <!-- 通过父组件给子组件定义一个自定义事件实现:子组件给父组件传递数据 使用@或v-on-->
        <!-- <Student @getinfo="reciveStudent"></Student>  -->
        <!--
            1. 通过父组件给子组件定义一个自定义事件实现:子组件给父组件传递数据 使用ref,并在
        mounted中绑定，这种方式最灵活
            2.如果要给子组件绑定原生事件，需要在原生事件后添加native
        -->
        <Student ref="student" @click.native="show"></Student>

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
    methods:{
        reciveSchool(msg){
            console.log('App收到学校名称:',msg)
        },
        reciveStudent(msg,...params){
            console.log('App收到学生名称',msg,params)
        },
        reciveAge(age){
            console.log(age)
        },
        show(){
            alert('Student组件触发了')
        }
    },
    mounted(){
         this.$refs.student.$on('getinfo',this.reciveStudent)// 绑定自定义事件
         this.$refs.student.$on('getinfo_0',this.reciveAge)
        //this.$refs.student.$once('getinfo',this.reciveStudent)绑定自定义事件并只能触发一次
    }
    }
</script>

<style>
.box0{
    background-color: antiquewhite;
}
</style>