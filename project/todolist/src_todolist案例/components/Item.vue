<template>
   <li id="item_outer">
      <label>
         <input id="item_inner" type="checkbox" :checked="item.done" @change="handlecheck(item.id)">
         <span>{{ item.title }}</span>
      </label>
      <button  id="item_button" @click="handledelete(item.id)">删除</button>
   </li>
   
</template>

<script>
 export default{
    name:'Item',
    props:['item','change_item','delete_item'],
    data() {
      return {
   
         
      }
    },
    methods:{
      handlecheck(id){
         this.change_item(id)
      },
      handledelete(id){
         if(confirm('确定删除吗?')){
            this.delete_item(id)
         }
      }
    },
    
 }
</script>

<style scoped>
   #item_outer{
      margin-left:-40px ;
     width: 500px;
   }

   #item_button{
      position: absolute;
      left: 466px;
    
   }
   li button{
      display: none;
   }
   li:hover{
      background-color: #ddd;
   }
   li:hover button{
      display: inline-block;
   }
</style>
