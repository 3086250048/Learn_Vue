<template>
<div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games"></slot>
</div>
</template>
<script>

    export default{
        data() {
            return {
                games:['a0','b0','c0','d0']
            }
        },
        props:['title']
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