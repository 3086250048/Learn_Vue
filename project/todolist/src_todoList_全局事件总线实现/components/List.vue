<template>
   <ul id="list0">
      <Item 
      v-for="item in List " :key="item.id" 
      :item="item"
      ></Item>
   </ul>
</template>

<script>
import Item from './Item.vue';
 export default{
    name:'List',
    components:{
      Item:Item
    },
   props:['List',]
    
 }
</script>

<style scope>
   #list0{
      width: 460px;
      list-style: none;
      border: 1px solid black;
   }
</style>
