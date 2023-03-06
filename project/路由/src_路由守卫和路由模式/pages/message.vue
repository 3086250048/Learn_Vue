<template>
    <div>
        <hr>
        <ul>
            <li v-for="(item,index) in '123456789'" :key="index">
                  
                <!-- 路由跳转携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/item?id=${item}&title=${'message'+item}`">
                    message{{ item }}
                </router-link>    -->
                <!-- 路由跳转携带query参数，to的对象写法 -->
                <router-link :to="{
                //使用命名路由简化路径参数
                name:'Item',
                query:{
                   
                    id:item,
                    title:'message'+item,
                }
                }" >
                    message{{ item }}
                </router-link>
                <!-- 路由跳转携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/item/${item}/${'message'+item}`">
                    message{{ item }}
                </router-link> -->
                <!-- 路由跳转携带params参数，to的对象写法  -->
                <!-- <router-link :to="{
                    //params的对象写法只能使用name参数，不能使用path参数
                    name:'Item',
                    params:{
                        id:item,
                        title:'message'+item
                    }
                }">
                    message{{ item }}
                </router-link> -->
                <button @click="PushShow(item)">push查看</button>
                <button @click="ReplaceShow(item)">replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
        
</template>

<script>



export default {
    name:'Message',
    data() {
        return {
           
        }
    },
    methods:{
        PushShow(item){
           this.$router.push({
            name:'Item',
            query:{
                id:item,
                title:'Message'+item
            }
           })
        },
        ReplaceShow(item){
            this.$router.replace({
                name:'Item',
                query:{
                    id:item,
                    title:'Message'+item
                }
                }
                
            )
        }
    },
    beforeDestroy(){
        console.log('Message组件被销毁了')
    }
}
</script>
<style scoped>
    ul{
        width: 100px;
    }
    .active{
        background-color: blue;
    }
    button{
       position: relative;
       left: 80px;
       top: -20px;
    }
</style>