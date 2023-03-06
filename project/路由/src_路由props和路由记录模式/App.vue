<template>
    <div>
       <Banner></Banner> 
        <hr>
        <!-- 原始html中使用a标签实现页面跳转 -->
        <!-- <div class="box active"><a href="./about.vue">About</a></div>
        <div class="box"><a href="./home.vue">home</a></div><br> -->
        <!-- Vue中借助Router-link实现页面的切换 -->
        <div class="box">
            <router-link active-class="active" to="/about">
                About
            </router-link>
        </div>
        <div class="box">
            <router-link active-class="active" to="/home">
                Home
            </router-link>
        </div><br>  
        <!-- 指定组件的呈现位置 -->
        <span>
            <router-view></router-view>
        </span>
    </div>
</template>


<script>
    import banner from './components/banner.vue'
    export default{
    name:'App',
    components:{
        Banner:banner
    },
    }
</script>
<style>
  .box{
        width: 100px;
        height: 30px;
        border: 1px solid black;
 
      
    }
    .active{
        background-color: blue;
    }
    span{
       position: relative;
       top: -100px;
       left: 200px;
    }
</style>