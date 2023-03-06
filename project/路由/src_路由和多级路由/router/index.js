//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
import about from '../pages/about'
import home from '../pages/home'
import news from '../pages/news'
import message from '../pages/message'
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
                    component:message
                }
            ]
        },
       

    ]
})