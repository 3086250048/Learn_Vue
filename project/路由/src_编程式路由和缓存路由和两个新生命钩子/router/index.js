//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
import about from '../pages/about'
import home from '../pages/home'
import news from '../pages/news'
import message from '../pages/message'
import item from '../pages/item'
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:about
        },
        {
            path:'/home',
            component:home,
            children:[
                {
                    path:'news',
                    component:news
                },
                {
                    path:'message',
                    component:message,
                    children:[
                        {
                            name:'Item',
                            // path:'item/:id/:title',
                            path:'item',
                            component:item,
                            /*props的第一种写法,值为对象,该对象中的所有的key，value都会以props形式
                            传给Item组件*/
                            // props:{
                            //     a:1,
                            //     b:'hello'
                            // }
                            /*props第二种写法，值为布尔值，如果布尔值为真，则会把该路由组件收到的params参数，以props形式
                            传给Item组件 */
                            // props:true

                            /* props的第三种写法，值为函数 */
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                        }
                    ]
                }
            ]
        },
       

    ]
})