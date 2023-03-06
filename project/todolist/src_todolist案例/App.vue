<template>
    <div id="outer">
        <Top :add_item="add_item"></Top>
        <List :List="List" :change_item="change_item" :delete_item="delete_item"></List>
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
                List:[
                    {id:'0001',title:'吃饭',done:true},
                    {id:'0002',title:'睡觉',done:false},
                    {id:'0003',title:'做饭',done:true}
                ]
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
