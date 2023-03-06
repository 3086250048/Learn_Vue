<template>
    <div>
        <h2>我是Home内容</h2>
        <div class="box">
            <router-link replace active-class="active" to="/home/news" >News</router-link>
        </div>
        <div class="box">
            <router-link replace active-class="active" to="/home/message">Message</router-link>
        </div>
        <!-- 这里指定需要缓存的是组件对应的组件名(即路由组件中的name:xxx配置项)
        缓存多个:include=['News','Message'],不写include默认全都缓存
        -->
        <keep-alive include="News">
            <router-view></router-view>
        </keep-alive>
        
    </div>
        
</template>
<script>
    export default{
        name:'Home',
        mounted(){
            console.log(this)
        }
    }
</script>

<style scoped>
.box{
    width: 80px;
    height: 20px;
    border: 1px solid black;
    float: left;
}
.active{
    background-color: blue;
}
</style>