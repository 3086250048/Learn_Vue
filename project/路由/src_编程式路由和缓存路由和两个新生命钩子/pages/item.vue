<template>
    <div>
        <hr>
        <!-- <span>消息编号:{{ $route.query.id }}</span><br>
        <span>消息标题:{{ $route.query.title }}</span> -->
        <!-- <span>消息编号:{{ $route.params.id }}</span><br>
        <span>消息标题:{{ $route.params.title }}</span><br> -->
        <span>消息编号:{{ id }}</span><br>
        <span>消息标题:{{ title }}</span>
    </div>
</template>
<script>
export default{
    name:'Item',   
    props:['id','title'],
    mounted() {
        console.log(this.$route)
    },
}

</script>
<style scoped>
span{
    position: relative;
    top:10px;
    left: 0px;
}
</style>