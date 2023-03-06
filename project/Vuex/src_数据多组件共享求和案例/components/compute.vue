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
    <ul>
        <h3>person组件的人员ID为:</h3>
        <li v-for="(item,index) in person_list" :key="index">{{ item.id }}</li>
    </ul>
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
 
    ...mapState(['sum','school','subject','person_list']),
    ...mapGetters(['bigsum'])
    },
    mounted(){
        
    },
    methods:{
        ...mapMutations({number_add:'ADD',number_subtract:'SUBTRACT'}),
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
