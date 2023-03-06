export default {
    install(Vue){
        //定义全局过滤器
        Vue.filter('mySlice',function(value){
                return value.slice(0,6)
            })  
        //定义全局指令
        Vue.directive('fbind',{
            //指令和元素成功绑定时
                bind(e,b){
                    console.log(this)//此处的this是window
                    e.value=b.value
                    },
            //指令所在元素被插入页面时
                 inserted(e,b){
                     e.focus()
                    },
            //指令所在的模板被重新解析时
                update(e,b){
                       e.value=b.value
                   }
             })
        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:100
                }
            },
        })
        //定义一个原型对象上的函数
        Vue.prototype.hello = () => {alert('警告')}
    }
}