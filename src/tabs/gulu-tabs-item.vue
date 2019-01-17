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
            this.eventBus.$on('update:selected',name=>{
                if(name === this.name){
                    console.log(`${this.name}被选中了`)
                }else{
                    console.log(`${this.name}没有被选中`)
                }
            })
        },
        methods:{
            clickItem(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-item{

    }
</style>