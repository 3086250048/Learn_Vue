//该文件用于创建Vuex中的store
//准备actions，用于响应组件中的动作
const actions={
    // add:function(context,step){
    //     context.commit('ADD',step)
    // },
    // subtract:function(context,step){
    //     context.commit('SUBTRACT',step)
    // },
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
    add_person:function(context,person){
        context.commit('ADD_PERSON',person)
    }
}
//准备mutations，用于操作数据(state)
const mutations={
    ADD:function(state,step){
        state.sum+=step
       console.log(step)
    },
    SUBTRACT:function(state,step){
        state.sum-=step
    },
    ADD_PERSON:function(state,person){
        state.person_list.unshift(person)
    }
}
//准备state ,用于存储数据
const state={
    sum:0,
    school:'浙江经济',
    subject:'前端',
    person_list:[
        {id:'001',name:'张三'}
    ]
}
//准备getters 用于将state中的数据进行加工
const getters={
    bigsum(state){
        return state.sum*100
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
        actions:actions,
        mutations:mutations,
        state:state,
        getters:getters

    }
)


