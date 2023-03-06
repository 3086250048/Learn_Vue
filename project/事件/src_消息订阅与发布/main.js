//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue"

//创建vm
new Vue({
    el:"#root",
    render:createElement=>createElement(App),

})