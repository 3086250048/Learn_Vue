<template>
   <ul id="list0">
      <Item 
      v-for="item in List " :key="item.id" 
      :item="item"
      :change_item="change_item"
      :delete_item="delete_item"
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
   props:['List','change_item','delete_item']
    
 }
</script>

<style scope>
   #list0{
      width: 460px;
      list-style: none;
      border: 1px solid black;
   }
</style>
