<template>
    <div>
        <transition-group name="hello" :appear="true">
            <h1 v-show="flag" key="1" >hello word</h1>
            <h1 v-show="!flag" key="2" >hello word</h1>
        </transition-group>
 
        <button @click="switch_show">显示/隐藏</button>
    </div>
    
</template>

<script>
export default{
    name:'Test',
    data() {
        return {
            flag:'true'
        }
    },
    methods:{
        switch_show(){
            this.flag=!this.flag
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: antiquewhite;
        font-size: 80px;

    }
    button{
        position: absolute;
        top: 10px;
    }
    /* 进入的起点 离开的终点 */
    .hello-enter , .hello-leave-to
    {
        transform:translateX(-100%)
    }
    /* 进入的终点 离开的起点*/
    .hello-enter-to ,.hello-leave{
        transform: translateX(0);
    }
    .hello-enter-active,.hello-leave-active{
        transition:1s linear;
    }
</style>

