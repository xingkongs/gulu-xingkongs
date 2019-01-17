<template>
    <div class="g-tabs-item" @click="clickItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsItem",
        inject:['eventBus'],
        props:{
            name:{
                type:[String,Number],
                required:true
            }
        },
        mounted(){
            // console.log('爷爷给item的eventBus')
            // console.log(this.eventBus);
            this.eventBus.$on('update:select',name=>{
                console.log(name);
            })
        },
        methods:{
            clickItem(){
                this.eventBus.$emit('update:select',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-item{

    }
</style>