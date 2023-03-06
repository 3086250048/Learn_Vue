<template>
    <div class='box0'>
        <Category  title="食物" >
            <template slot-scope='Categroydata'>
                    <ul>
                        <li v-for="(item,index) in Categroydata.games" :key="index">{{ item  }}</li>
                    </ul>
            </template>
        </Category>
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