<template>
        <ul>
            <h1 :style="style_obj" >欢迎学习Vue</h1>
            <li v-for="(item,index) in '123456789'" :key="index">
                news{{ item }}
                <input type="text">
            </li>
        </ul>
</template>

<script>

export default {
    name:'News',
    data() {
        return {
            style_obj:{
                opacity:1
            }
        }
    },
    beforeDestroy(){
        console.log('news即将被销毁')
    },
    activated() {
        console.log('New组件激活')
        this.timer=setInterval(()=>{
            this.style_obj.opacity-=0.1
            if(this.style_obj.opacity<=0){this.style_obj.opacity=1}
        },100)
    },
    deactivated(){
        console.log('New组件失活')
        clearInterval(this.timer)
    }
}
</script>
<style scoped>
    ul{
        width: 400px;
    }
    h1{
        position: relative;
        top:20px;
        left: -100px;
    }
</style>