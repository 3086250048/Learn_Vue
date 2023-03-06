//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
import about from '../pages/about'
import home from '../pages/home'
import news from '../pages/news'
import message from '../pages/message'
import item from '../pages/item'

const vr= new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/about',
            component:about,
            meta:{
                title:'关于'
            },
            //独享路由守卫
            // beforeEnter(to,from,next){  
            //     if(to.path==='/about'){
            //         if(localStorage.getItem('name')==='czz'){
            //             next()
            //         }else{
            //             alert('用户名不正确')
            //         }
            //     }
            // }
        },
        {
            path:'/home',
            component:home,
            children:[
                {
                    path:'news',
                    component:news,
                    meta:{
                        auth:true,
                        title:'个人新闻'
                    }   
                },
                {
                    path:'message',
                    component:message,
                    meta:{
                        auth:true,
                        title:'个人消息'
                    },
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
                            },
                            meta:{
                                auth:true,
                                title:'详细信息'
                            }
                        }
                    ]
                }
            ],
            meta:{
                auth:true,
                title:'个人主目录'
            }
        },
       

    ]
})
//全局前置路由守卫
vr.beforeEach((to,from,next) => {
    console.log(to,from)
    if(to.meta.auth){
        if(localStorage.getItem('name')==='czz' ){
            next()
        }
        else
        {
            alert('用户名不正确')
        }
    }
    else{
        next()
    } 
})
//全局后置路由守卫
vr.afterEach((to,from)=>{
    document.title=to.meta.title || 'Vue Router Demo'
}
)


export default vr