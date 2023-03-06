<template>
    <div>
        <compute></compute>
        <person></person>
    </div>
</template>


<script>
    import compute from './components/compute.vue'
    import person from './components/person.vue';
    export default{
    name:'App',
    components:{
        compute:compute,
        person:person
    },
    }
</script>
