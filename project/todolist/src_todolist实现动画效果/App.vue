<template>
    <div id="outer">
        <Top :add_item="add_item"></Top>
        <List :List="List" ></List>
        <Footer :List="List" :checkall="checkall" :cleardoneitem="cleardoneitem"></Footer>
    </div>
</template>


<script>
    import Top from './components/Top.vue';
    import List from './components/List.vue';
    import Footer from './components/Footer.vue';

    export default{
        name:'App',
        components:{
            Top:Top,
            List:List,
            Footer:Footer
        },
        data(){
             return {
                List:JSON.parse(localStorage.getItem('List'))   || []
            }
        },
        methods:{
            add_item(item){
                this.List.unshift(item)
            },
            change_item(id){
                    this.List.forEach((item)=>{
                        if(item.id===id) item.done=!item.done
                    })
            },
            delete_item(id){
                console.log(id)
                this.List=this.List.filter((item)=>{
                   return item.id!==id
                })
            },
            checkall(flag){
                this.List.forEach((item)=>{
                    item.done=flag
                })
            },
            cleardoneitem(){
               this.List= this.List.filter((item)=>{
                    return !item.done
                })
            }
        },
        watch:{
            List:{
                deep:true,
                handler(value){
                    localStorage.setItem('List',JSON.stringify(value))
                }
            }
        },
        mounted(){
            this.$bus.$on('delete_item',this.delete_item)
            this.$bus.$on('change_item',this.change_item)
        },
        beforeDestroy(){
            this.$bus.$off('delete_item')
            this.$bus.$off('change_item')
        }
        }
    
</script>

<style>
    #outer{
        border: 1px solid black;
        width: 530px;
        padding-left:10px ;
        padding-top:10px;
        padding-bottom: 10px;
        position: absolute;
    }
</style>
