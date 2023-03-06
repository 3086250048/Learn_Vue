<template>
    <div>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add_person">添加</button>
        <ul>
            <h3>compute组件的SUM值为:{{ sum }}</h3>
            <li v-for="(item,index) in person_list" :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>
<script>
import { nanoid } from 'nanoid';
import { mapState } from 'vuex';
export default{
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    methods: {
        add_person(){
            const person={id:nanoid(),name:this.name}
            this.$store.dispatch('add_person',person)
            this.name=''
        }
    },
    computed:{
        ...mapState(['person_list','sum'])

    }
}
</script>
<style scoped>
    div{
        background-color: antiquewhite;
    }
</style>
