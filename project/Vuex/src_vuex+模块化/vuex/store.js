import axios from 'axios';
import { nanoid } from 'nanoid';
const computeOptions={
    namespaced:true,
    actions:{
        add_odd:function(context,step){
            if(context.state.sum%2!==0){
                context.commit('ADD',step)
            }
        },
        wait_add:function(context,step){
            setTimeout(() => {
                context.commit('ADD',step)
            }, 1000);
        },
    },
    mutations:{
        ADD:function(state,step){
            state.sum+=step
           console.log(step)
        },
        SUBTRACT:function(state,step){
            state.sum-=step
        },
    },
    state:{
        sum:0,
        school:'浙江经济',
        subject:'前端',
    },
    getters:{
        bigsum(state){
            return state.sum*100
        }
    }
}
const personOptions={
    namespaced:true,
    actions:{
        add_person:function(context,person){
            context.commit('ADD_PERSON',person)
        },
        add_person_server(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response =>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error =>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON:function(state,person){
            state.person_list.unshift(person)
        }
    },
    state:{
        person_list:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{
       
    }
}

//引入Vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

//应用Vuex插件
Vue.use(Vuex)
//创建store，并暴露store
export default new Vuex.Store(
    {
        modules:{
            computeAbout:computeOptions,
            personAbout:personOptions
        }
    }
)


