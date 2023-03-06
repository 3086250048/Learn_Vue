<template>
<div class="Student">
    <h1>学生名称:{{ name }}</h1>
    <h1>学生年龄:{{ age }}</h1>
    <button @click="getname">点击</button>
    <button @click="unbind">解绑事件</button>
    <button @click="death">销毁当前vc实例</button>
</div>
</template>

<script>
 export default{
    name:'Student',
    data() {
        return {
            name:'陈中正',
            age:'18'
        }
    },
    methods:{
        getname(){
            //触发student组件实例身上的getname事件
            this.$emit('getinfo',this.name,1,2,3,4)
            this.$emit('getinfo_0',this.age)
        },
        //解绑事件
        unbind(){
            //解绑单个事件
            // this.$off('getinfo')
            //解绑多个事件
            // this.$off(['getinfo','getinfo_0'])
            //解绑所有事件
            this.$off()
        },
        //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全部不奏效(销毁vm同样可以)
        death(){
            this.$destroy()
        }
    }
 }
</script>

<style  scoped>
    .Student{
        
        background-color: antiquewhite;
    }    
</style>
