<template>
        <ul>
            <li v-for="(item,index) in '123456789'" :key="index">news{{ item }}</li>
        </ul>
</template>

<script>

export default {
    name:'News'
}
</script>
<style scoped>
    ul{
        width: 100px;
    }
</style>