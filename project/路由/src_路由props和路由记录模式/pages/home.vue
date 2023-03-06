<template>
    <div>
        <h2>我是Home内容</h2>
        <div class="box">
            <router-link replace active-class="active" to="/home/news" >News</router-link>
        </div>
        <div class="box">
            <router-link replace active-class="active" to="/home/message">Message</router-link>
        </div>
        <router-view></router-view>
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