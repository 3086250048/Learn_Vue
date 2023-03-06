import Vue from "vue";
import App from './App.vue';
//全局引入
import {fun0,fun1,fun2} from './mixin'
//全局注册
Vue.mixin(fun0)
Vue.mixin(fun1)
Vue.mixin(fun2)

new Vue({
    el:"#root",
    render:createElement=>createElement(App)
})