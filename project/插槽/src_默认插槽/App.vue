<template>
    <div class='box0'>
        <Category :listdata="foods"  title="食物" >
        <img src="./assets/2023-02-12_123411.png" alt="">
        </Category>
        <Category :listdata="games" title="游戏" ></Category>
        <Category :listdata="films" title="电影" ></Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
    name:'App',
    components:{
        Category:Category
    },
    data() {
        return {
            foods:['a0','b0','c0','d0'],
            games:['a1','b1','c1','d1'],
            films:['a2','b2','c2','d2']
        }
    },
}
</script>

<style>
.box0{
    display: flex;
    justify-content: space-around;
   
}
</style>