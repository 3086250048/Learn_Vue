<template>
<div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
       <li v-for="(item,index) in listdata" :key="index">{{ item }}</li>
       <slot></slot>
    </ul>
</div>
</template>
<script>

    export default{
        props:['listdata','title']
    }
</script>
<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;

    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
       width: 100% ;
      
    }
</style>