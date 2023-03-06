<template>
        <h2>我是About内容</h2>
</template>
<script>
    export default{
        name:'About',
        mounted(){
            console.log(this)
        },
        //通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){
            next()
            console.log('进入about组件')
        },
        // //通过路由规则,离开该组件时被调用
        beforeRouteLeave(to,from,next){
            next()
            console.log('离开about组件')
        }

    }
</script>
