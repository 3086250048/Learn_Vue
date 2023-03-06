<template>
    <div>
        <transition
        name="animate__animated animate__bounce"
        enter-active-class="animate__backInDown"
        leave-active-class="animate__backOutDown"
        :appear="true">
            <h1 v-show="flag"  >hello word</h1>
        </transition>
 
        <button @click="switch_show">显示/隐藏</button>
    </div>
    
</template>

<script>
import 'animate.css'
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
  
</style>

