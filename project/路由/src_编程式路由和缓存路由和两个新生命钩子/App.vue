<template>
    <div>
       <Banner></Banner> 
        <hr>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">后退两步</button>
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
    methods:{
        back(){
             this.$router.back()
         
        },
        forward(){
            this.$router.forward()
        },
        go(){
            this.$router.go(-2)
        }
    }
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