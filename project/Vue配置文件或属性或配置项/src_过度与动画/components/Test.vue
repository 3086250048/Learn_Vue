<template>
    <div>
        <transition name="hello" :appear="true">
            <h1 v-show="flag"  >hello word</h1>
        </transition>
        <transition name="msg_0" :appear="true">
            <h1 v-show="flag"  >渐进式的</h1>
        </transition>
        <transition name="msg_1" :appear="true">
            <h1 v-show="flag"  >便捷的</h1>
        </transition>
 
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
    .hello-enter-active{
        animation: Test 1s;
    }
    .hello-leave-active{
        animation: Test 1s reverse;
    }
    .msg_0-enter-active{
        animation: Test 1.2s;
    }
    .msg_0-leave-active{
        animation: Test 1.2s reverse;
    }
    .msg_1-enter-active{
        animation: Test 1.4s;
    }
    .msg_1-leave-active{
        animation: Test 1.4s reverse;
    }
    @keyframes Test{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>

