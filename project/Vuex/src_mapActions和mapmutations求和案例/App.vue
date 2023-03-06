<template>
    <div>
        
        <compute></compute>
    </div>
</template>


<script>
    import compute from './components/compute.vue'
    export default{
    name:'App',
    components:{
        compute:compute
    },
    data() {
        return {
            msg:'你好世界'
        }
    },
    methods:{

    }
    }
</script>
