<template>
<div class="compute">
    <h1>当前求和为:{{ sum }}</h1><br>
    <h3>当前求和放大10倍为:{{ bigsum }}</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>
   <select v-model.number="step" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
   </select>
    <button @click="number_add(step)">+</button>
    <button @click="number_subtract(step)">-</button>
    <button @click="oddnumber(step)">当前和为奇数再加</button>
    <button @click="wait_add(step)">等一等再加</button>
</div>
</template>

<script>
//导入map
 import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
 export default{
    name:'compute',
    data() {
        return {
            
            step:1,
    
        }
    },
    computed:{
    //借助mapState生成计算属性，从state中读取数据(对象写法)
    //...用于将{}里的键值对拆出来填入当前对象
    //    ... mapState({
    //         sum:'sum',
    //         school:'school',
    //         subject:'subject'
    //     })
    //借助mapState生成计算属性，从state中读取数据(数组写法)
    ...mapState(['sum','school','subject']),

    //借助mapGetters生成计算属性，从getters中读取数据(对象写法)
    //...用于将{}里的键值对拆出来填入当前对象
    //    ... mapGetters({
    //        bigsum:'bigsum'
    //     })
    //借助mapGetters生成计算属性，从getters中读取数据(数组写法)
    ...mapGetters(['bigsum'])
    },
    mounted(){
        
    },
    methods:{
        // number_add(){
        //     this.$store.commit('ADD',this.step)
        // },
        // number_subtract(){
        //    this.$store.commit('SUBTRACT',this.step)
        // },
        
        //借助mapmutations生成对应的方法，方法中会调用commit去联系mutations(对象写法，数组写法类似
        //上面的案例),且函数在标签中应用时需要传入step
        ...mapMutations({number_add:'ADD',number_subtract:'SUBTRACT'}),
        


        // oddnumber(){
        //    this.$store.dispatch('add_odd',this.step)
        // },
        // wait_add(){
        //     this.$store.dispatch('wait_add',this.step)
        // }
        //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(对象写法，数组写法类似
        //上面的案例),且函数在标签中应用时需要传入step
        ...mapActions({oddnumber:'add_odd',wait_add:'wait_add'}),
       
    },
 }
</script>

<style>
    .compute{
        border: 1px solid #bfc;
        background-color: antiquewhite;
    }    
    button{
        margin-left: 5px;
    }
</style>
