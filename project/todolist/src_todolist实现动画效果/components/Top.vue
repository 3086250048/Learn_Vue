<template>
   <input type="text" id="header" 
   @keyup.enter="create_item"
   v-model="title" placeholder="请输入你的任务名称，按回车确认">
</template>

<script>
import {nanoid} from 'nanoid'

 export default{
    name:'Top',
    data() {
      return {
         title:''

      }
    },
    methods:{
         create_item(){
            if(!this.title.trim()){
               alert('输入不能为空')
               this.title=''
               return
            }
            const item_obj = {
               id:nanoid(),
               title:this.title,
               done:false,
               isedit:false,
           
            }
            this.add_item(item_obj)
            this.title=''

         }
    },
    props:['add_item']
 }
</script>

<style>
   #header{
      width: 500px;
      height: 50px;
      font-size: 20px;
      
   }
</style>
