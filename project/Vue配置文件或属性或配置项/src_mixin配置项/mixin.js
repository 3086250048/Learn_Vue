export const fun0={
    methods: {
        showmsg(){
            alert(this.name)
        }
    },
}

export const fun1={
    data() {
        return {
            x:100,
            y:100
        }
    },
}

export const fun2={
    mounted() {
        alert('mixin:alert')
    },
}