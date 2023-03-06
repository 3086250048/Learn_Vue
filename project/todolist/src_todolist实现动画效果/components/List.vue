<template>
   <ul id="list0">
      <transition-group name="item" appear>
         <Item 
            v-for="item in List " :key="item.id" 
            :item="item"
         ></Item>
      </transition-group>
    
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

   .item-enter-active{
        animation: Test 1.4s;
    }
    .item-leave-active{
        animation: Test 1.4s reverse;
    }
    @keyframes Test{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
