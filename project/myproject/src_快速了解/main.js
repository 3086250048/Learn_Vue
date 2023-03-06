import Vue from 'vue'
import App from './App.vue'
//引入ElementUI组件库
// import ElementUI from 'element-ui'
// //引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'
// //应用ElementUI
// Vue.use(ElementUI)
Vue.config.productionTip = false
//按需引入
import { Button,Input,DatePicker} from 'element-ui';
//应用ElementUI
Vue.component(Button.name,Button)
Vue.component(Input.name,Input)
Vue.component(DatePicker.name,DatePicker)


/* 
 关于不同版本的Vue
 1.vue.js是完整版的vue 包含:核心功能 + 模板解析器
 2.vue.runtime.xxx.js是运行版的vue，只包含:核心功能。没有模板解析器功能
 因为vue。runtime.xxx.js没有模板解析器功能，所以不能使用tmplate配置项，需要
 使用render函数接收收到的createElement函数去指定具体内容

*/
new Vue({
  el:"#root",
  render(createElement){
    return createElement(App)
  },
}) 