<template>
<div class="compute">
    <h1>当前求和为:{{ sum }}</h1><br>
   <select v-model="step" >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
   </select>
    <button @click="number_add">+</button>
    <button @click="number_subtract">-</button>
    <button @click="oddnumber">当前和为奇数再加</button>
    <button @click="wait_add">等一等再加</button>
</div>
</template>

<script>
 export default{
    name:'School',
    data() {
        return {
            sum:0,
            step:1,
            add_id:null
        }
    },
    methods:{
        number_add(){
            this.sum+=parseInt(this.step)
        },
        number_subtract(){
            this.sum-=parseInt(this.step)
        },
        oddnumber(){
            if(this.sum%2!==0){
                this.sum+=parseInt(this.step)
            }
        },
        wait_add(){
            if(this.add_id===null){
                this.add_id= setInterval(()=>{
                     this.sum+=parseInt(this.step)
            },1000)
            }
           
        }
    },
    watch:{
        sum(){
            console.log(this.add_id)
            clearInterval(this.add_id)
            this.add_id=null
        }
    }
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
