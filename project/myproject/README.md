

#ref属性
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用在html标签上是获取真实DOM元素，应用在组件标签上是获取组件实例对象vc
    3.使用方式
        打标识:<h1 ref='xxx'>...<h1> 或 <School ref='xxx'/>
        获取:this.$refs.xxx
#配置项props
 功能:让组件接收外部传来的数据
    -传递数据
        <Student name='xxxx'/>
    -接收数据
        -props:['name']
        -props:{
            name:String(限制类型)
        }
        -props:{
            name:{
                (限制类型、限制是否可以为空、指定默认值)
                type:String,
                required:true,
                default:'老王'
            }
        }
        备注:props是只读、Vue底层会检测你对props的修改，如果进行了修改，就会发出警告
        如果业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data的
        数据
    #mixin
        功能:可以把多个组件共用的配置提取成一个混入对象
        使用方式:
            第一步:定义混合,例如
                export const fun0={
                    methods: {
                         showmsg(){
                            alert(this.name)
                        }
                    }
                }
            第二步:引入混入
            import {  fun0 } from 'xxxx'
            第三步:注册混入
                全局注册
                    -Vue.mixin(fun0)
                局部注册
                    -mixins:['fun0']
    #插件
        功能:用于增强vue
        本质:包含install方法的一个对象,install的第一个参数是Vue,第二个参数是插件使用者传递的数据
        定义插件
            对象.install = function(Vue,options) {
                //1.添加全局过滤器
                Vue.filter(...)
                //2.添加全局命令
                Vue.directive(...)
                //3.添加全局混入
                Vue.mixin(...)
                //4.添加实例方法
                Vue.prototype.$myMethod=function(){...}
                Vue.prototype.$myPrototype=xxxx
            }
            引入插件 import ...
            注册插件:Vue.use(plugins)
    #scoped
        <style scoped> </style> 防止相同的样式名称导致组件之间的样式冲突
    #组件化编程流程(通用)
    1.实现静态组件:抽取组件，使用组件实现静态页面效果
    2.展示动态数据
        -数据的类型、名称是什么
        -数据保存在哪个组件
    3.交互-从绑定事件开始监听

    #总结todolist案例
    
    #组件的自定义事件
        1.一种组件间的通信方式，适用于:子组件====>父组件
        2.使用场景A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)
        3.绑定自定义:
            1.第一种方式，在父组件中:<demo @myevent='test'/>
            2.第二种方式,在父组件中:
                    <demo ref='demo'/>
                    mounted(){
                        this.$refs.demo.$on('myevent',this.callback)
                    }
            3.如果只想让自定义事件只能触发一次，可以使用once修饰符，或$once修饰符
        4.触发自定义事件
            this.$emit('myevent',数据)
        5.解绑自定义事件
            this.$off('myevent')
        6.组件上也可以绑定原生DOM事件，需要使用native修饰符
        7.注意:通过this.$refs.xxx.$on('myevent',this.callback)绑定的自定义事件，回调函数要么配置
        在methods中，要么使用箭头函数配置在$on()中，否则this的指向会出问题

    #全局事件总线
        1.一种组件间通信的方式，适用于任意组件间通信
        2.安装全局事件总线:
            new Vue({
                .....
                beforeCreate(){
                    Vue.prototype.$bus=this //安装全局事件总线，$bus就是当前的vm
                }
            })
        3.使用当前事件总线
            1.接收数据:A组件想接收数据,则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
                    methods:{
                        demo(a1,a2)
                    }
                    .....
                    mounted(){
                        this.$bus.$on('event',this.demo)
                    }
            2.提供事件
                this.$bus.emit('event',a1,a2)
            3.解绑事件
                最好在beforeDestroy钩子中，使用$off去解绑当前组件中所用到的事件
                    beforeDestroy(){
                        this.$bus.$off('event')
                    }
    #消息订阅与发布(pubsub)
    1.一种组件间通信的方式，适用于任意组件间通信
    2.使用步骤
        1.安装pubsub: npm i pubsub-js
        2.在需要使用pubsub的组件的script标签中引入 import pubsub from 'pubsub-js'
        3.接收数据:A组件想要接收数据，则在A组件中订阅消息，订阅的回调留在A组件中
                methods:{
                    demo(data){
                        .....
                    }
                },
                mounted(){
                    this.pid=pubsub.subscribe('消息名',this.demo) //订阅消息
                }
        4.提供数据 
                pubsub.publish('消息名',数据)
        5.取消订阅
                beforeDestroy(){
                    pubsub.unsubscribe(this.pid)
                }
    #this.$nextTick(callback)
    作用:在下一次DOM更新结束后执行其指定的回调
    应用:当改变数据之后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行
    #动画
    1.准备好样式
        元素进入的样式
            1.v-enter(进入的起点) \ v-enter-active(进入的过程中) \ v-enter-to(进入的终点)
        元素离开的样式
            1.v-leave(离开的起点)\v-leave-active(离开的过程中)\v-leave-to(离开的终点)
    2.使用<transition>包裹要过度的元素，并配置name属性
        <transition name='hello'>
            <标签>
        </transition>
    3.如果有多个元素需要过度，则需要使用<transition-group apper(初始化加载动画)>，且每个元素需要指定key值
    
    #Vuex
        何时需要使用:多个组件需要共享数据
        搭建Vuex环境
            1.创建文件src/store/index.js
                //引入Vue核心库
                import Vue from 'vue'
                //引入Vuex
                import Vuex from 'vuex'
                //应用Vuex插件
                Vue.use(Vuex)
                //准备actions，用于响应组件中的动作
                const actions={}
                //准备mutations，用于操作数据(state)
                const mutations={}
                //准备state ,用于存储数据
                const state={}

                //创建并暴露store
                export default new Vuex.store({
                    actions:actions,
                    mutations:mutations,
                    state:state
                })
            2.在main.js中创建vm时传入store配置项
            //引入store
            import store from './store'

            //创建VM
            new Vue({
                el:"#root",
                render:createElement=>createElement(App),
                store:store
            })

    Vuex模块化
        目的:让代码更好维护，让多种数据分类更加明确  
        修改store.js
        const computeAbout={
            namespaced:true,
            state:{...},
            mutatiionss:{...},
            actions:{...},
            getters:{...}
        }
        const personAbout={
            namespaced:true,
            state:{...},
            mutatiionss:{...},
            actions:{...},
            getters:{...}
        }
        const store = new Vuex.Store({
            modules:{
                computeAbout:computeAbout,
                personAbout:personAbout
            }
        })

        //读取State中的数据
            -直接读取
                this.$store.state.personAbout.要读取的数据
            -借助mapstate读取
                ...mapState('personAbout',['要读取的数据',...])
        //读取getters中数据
            -直接读取
                this.$store.getters['personAbout/要读取的数据']
            -借助mapstate读取
                ...mapGetters('personAbout',['要读取的数据0','要求读取的数据1'])
        //调用dispatch
            -直接dispatch
                this.$store.dispatch('personAbout/addPerson',person_obj)
            -借助mapActions
                ...mapActions('personAbout',{生成的fun名称:'Actions中的fun名称',...})
        //调用commit
            -直接调用commit
                this.$store.commit('personAbout/ADDPERSON',person_obj)
            -借助mapMutations
                ...mapMutations('personAbout',{生成的fun名称:'Mutations中的fun名称'})
    #VueRouter
        1.安装vue-router 命令 npm i vue-router@3
        2.引入 import VueRouter from "vue-router";
        3.应用插件 Vue.use(VueRouter)
        4.编写Router配置项
            import VueRouter from "vue-router";
            import Vue from "vue";
            Vue.use(VueRouter)
            import about from '../components/about'
            import home from '../components/home'
            export default new VueRouter({
                routes:[
                    {
                        path:'/about',
                        component:about
                    },
                    {
                        path:'/home',
                        component:home
                    }
                ]
            })
        5.在VM实例中添加router属性
        const vm=new Vue({
            router:router
        })
        6.实现切换
            <router-link active-class='active' to='/about'>About</router-link>
        7.指定组件展示位置
            <router-view><router-view>
        8.注意点
            -路由组件通常放在pages文件夹，一般组件通常存放在components文件夹
            -通过切换，隐藏了路由组件，默认是被销毁的，需要的时候再去挂载
            -每个组件都有自己的$route属性，里面存储着自己的路由信息
            -整个应用只要一个$router，可以通过组件的$router属性获取到
        #多级路由
            -index文件中
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
            -标签中
                <router-link to='/home/news'></router-link>
        #路由的query参数
            1.传递参数
                -路由跳转携带query参数，to的字符串写法 
                    <router-link :to="`/home/message/item?id=${index+1}&title=${'message'+item}`">
                        message{{ item }}
                    </router-link>      
                -路由跳转携带query参数，to的对象写法 
                    <router-link :to="{
                        path:'/home/message/item',
                        query:{
                            id:item,
                            title:'message'+item,
                        }
                    }">
                        message{{ item }}
                    </router-link>
            2.接收参数
                <span>消息编号:{{ $route.query.id }}</span><br>
                <span>消息标题:{{ $route.query.title }}</span>
            #命名路由
                -给路由命名
                     children:[
                        {
                            name:'Item',
                            path:'item',
                            component:item
                        }
                    ]
                -简化跳转
                    -简化前
                        <router-link :to="{
                            path:'/home/message/item',
                            query:{
                                id:item,
                                title:'message'+item,
                            }
                        }" >
                    -简化后
                        <router-link :to="{
                            name:'Item',
                            query:{
                                
                                id:item,
                                title:'message'+item
                                }
                        }" >
            #路由传递params参数    
                1.配置路由，声明接收params参数
                ...
                path:/item/:参数0/:参数1
                ...
                2.传递参数
                <!-- 路由跳转携带params参数，to的字符串写法 -->
                    <router-link :to="`/home/message/item/${item}/${'message'+item}`">
                        message{{ item }}
                    </router-link> 
                <!-- 路由跳转携带params参数，to的对象写法  -->
                    <router-link :to="{
                        //params的对象写法只能使用name参数，不能使用path参数
                        name:'Item',
                        params:{
                            id:item,
                            title:'message'+item
                        }
                    }">
                3.接收参数
                <span>消息编号:{{ $route.params.id }}</span><br>
                <span>消息标题:{{ $route.params.title }}</span>
            #路由的props配置
                作用:让路由组件更方便的使用参数
                name:'Item',
             // path:'item/:id/:title',
                path:'item',
                component:item,
            -props的第一种写法,值为对象,该对象中的所有的key，value都会以props形式传给Item组件
                 props:{
                    a:1,
                    b:'hello'
                    }
            -props第二种写法，值为布尔值，如果布尔值为真，则会把该路由组件收到的params参数，以props形式传给Item组件
                 props:true

            -props的第三种写法，值为函数 
                props($route){
                    return {id:$route.query.id,title:$route.query.title}
                            }
        #<router-link> 的replace属性
            1.作用:控制路由跳转时操作的历史记录的模式
            2.浏览器的历史记录有两种写入方式:分别push和repalce，push时追加历史记录
            replace是替换当前的历史记录，路由跳转的时候默认是push模式
            3.如何开启replace模式:<router-link replace></router-link>
        #编程式路由
            1.作用:不借用<router-link>实现路由跳转
            2.具体编码
                //$router的几个API
                this.$router.push({
                    name:'Item',
                    query:{
                        id:xxx,
                        title:xxx
                    }
                })
                
                this.$router.replace({
                    name:'Item',
                    params:{
                        id:xxx,
                        title:xxx
                    }
                })

                this.$router.forward()//前进
                this.$router.back()//后退
                this.$router.go(step)//可前进可后退指定步数
        #缓存路由组件
            1.作用:让不展示的路由组件保持挂载，不被销毁
            2.具体编码
                <keep-alive include='News'>
                    <router-view></router-view>
                </keep-alive>
        #路由中的两个新的生命周期钩子
            1.作用:路由组件独有的两个钩子，用于捕获路由组件的激活状态
            2.具体名字
                1.activeted路由组件处于激活状态(可视)
                2.deactived路由组件处于失活状态(不可视)
        #路由守卫
            作用:对路由权限进行控制
            分类:全局守卫、独享守卫、组件内守卫
            全局守卫
                //全局前置路由守卫
                    vr.beforeEach((to,from,next) => {
                        console.log(to//要去的组件$route,from//跳转前的组件$route)
                        if(to.meta.auth){
                            if(localStorage.getItem('name')==='czz' ){
                                next()//放行
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
                //独享前置路由守卫(独享没有后置路由守卫)
                beforeEnter(to,from,next){  
                    if(to.path==='/about'){
                        if(localStorage.getItem('name')==='czz'){
                            next()
                        }else{
                            alert('用户名不正确')
                        }
                    }
                }
                //组件路由守卫
                    //通过路由规则，进入该组件时被调用
                    beforeRouteEnter(to,from,next){
                        next()
                        console.log('进入about组件')
                    },
                    // //通过路由规则,离开该组件时被调用
                    beforeRouteLeave(to,from,next){
                        next()
                        console.log('离开about组件')
                    }
        #路由的两种工作模式
            1.对于一个url,#后面的就是hash值
            2.hash值不会包含在http请求中
            3.hash模式
                1.地址中带着#号，不美观
                2.如果以后将地址通过第三方收集app分享，如果app校验比较严格，则地址会被标记
                不合法
                3.兼容性较好
            4.history模式
                1.地址干净,美观
                2.兼容性和hash模式比略差
                3.应用部署上线时需要后端人员的支持，解决刷新页面时，服务端404的问题
            5.更改
                const vr= new VueRouter({
                    mode:'history',
                    .....
                    })