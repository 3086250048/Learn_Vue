//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue"
// //引入VueRouter
// import VueRouter from "vue-router";
// //应用VueRouter插件
// Vue.use(VueRouter)
import router from "./router/index";

//创建vm
const vm=new Vue({
    el:"#root",
    render:createElement=>createElement(App),
    router:router
})
console.log(vm)