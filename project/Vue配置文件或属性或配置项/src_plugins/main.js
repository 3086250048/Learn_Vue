//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue"
//引入插件
import plugins from "./plugins";
//注册插件
Vue.use(plugins)
//创建vm
new Vue({
    el:"#root",
    render:createElement=>createElement(App)
})