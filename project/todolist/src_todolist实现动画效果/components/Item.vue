<template>
   <li id="item_outer">
      <label>
         <input id="item_inner" type="checkbox" :checked="item.done" @change="handlecheck(item.id)">
         <span v-show="!item.isedit">{{ item.title }}</span>
         <input ref="inputtitle" type="text" :value="item.title" v-show="item.isedit" @blur="handleblur(item,$event)">
      </label>
      <button  id="item_button" @click="handledelete(item.id)">删除</button>
      <button v-show="!item.isedit"  id="item_button_0" @click="edititem(item)">编辑</button>
   </li>
   
</template>

<script>
 export default{
    name:'Item',
    props:['item',],
    data() {
      return {
   
         
      }
    },
    methods:{
      handlecheck(id){
         this.$bus.$emit('change_item',id)
      },
      handledelete(id){
         if(confirm('确定删除吗?')){
            this.$bus.$emit('delete_item',id)
         }
      },
      edititem(item){
         item.isedit=true
         //nextTick里面的回调函数会在dom节点更新完毕之后才执行
         this.$nextTick(function(){
            this.$refs.inputtitle.focus()
         })
        
      },
      handleblur(item,event){
         item.isedit=false
         if(!event.target.value.trim()) return alert('不能为空')
         item.title=event.target.value
      
    
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
   #item_button_0{
      position: absolute;
      left: 420px;
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
