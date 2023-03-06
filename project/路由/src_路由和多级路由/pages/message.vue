<template>
        <ul>
            <li v-for="(item,index) in '123456789'" :key="index">message{{ item }}</li>
        </ul>
</template>

<script>

export default {
    name:'Message'
}
</script>
<style scoped>
    ul{
        width: 100px;
    }
</style>