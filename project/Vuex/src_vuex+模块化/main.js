//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue"
//引入Store
import store from './vuex/store'
//创建vm
const vm=new Vue({
    el:"#root",
    store:store,
    render:createElement=>createElement(App),
    beforeCreate() {
        
    },
})
console.log(vm)