<template>
   <div v-show="List.length">
      <input id="checkbox0" type="checkbox" :checked="isAll"  @click="check">
      <span id="span0">已完成{{ done }}/全部{{ List.length }}</span>
      <button id="button0" @click="cleardoneitem">
          清除已完成的任务
      </button>
   </div>
</template>

<script>
 export default{
   name:'Footer',
   props:['List','checkall','cleardoneitem'] ,
   data() {
      return {
         state:''
      }
   },
   computed:{
      done(){
         return  this.List.reduce((pre,current)=>{
               return pre+(current.done?1:0 )
           },0)  
      },
      isAll(){
         if(this.List.length<=0){return false}
         return this.List.length === this.done
      }
   },
   methods:{
      check(e){
        this.checkall(e.target.checked)
      },
    
   }
 }
</script>

<style scoped>
   #span0{
      margin-left: 10px;
   }
   #button0{
      position: absolute;
      left: 380px;
      bottom:10px;
      width: 150px;
      height: 30px;
   }
</style>
