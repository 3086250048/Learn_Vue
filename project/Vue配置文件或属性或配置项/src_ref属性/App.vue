<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点击输出上方的DOM元素</button>
        <School ref="sch"/>
        
    </div>
</template>


<script>
    import School from './components/School.vue'
    export default{
    name:'App',
    components:{
        School:School
    },
    data() {
        return {
            msg:'你好世界'
        }
    },
    methods:{
        showDom(){
            console.log(this.$refs.title)//真实dom元素
            console.log(this.$refs.btn)//真实dom元素
            console.log(this.$refs.sch)//vc实例对象
        }    
    }
    }
</script>
