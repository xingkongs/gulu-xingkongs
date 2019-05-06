<template>
    <div class="g-layout" :class="layoutClasses">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "GuluLayout",
        data(){
            return{
                layoutClasses:{
                    hasSider:false
                }
            }
        },
        mounted(){
            this.$children.map((vm)=>{
                if(vm.$options.name === 'GuluSider'){
                    this.layoutClasses.hasSider = true
                }
            })
        }
    }
</script>
<style scoped lang="scss">
    .g-layout{
        flex-grow:1;
        display: flex;
        flex-direction:column;
        overflow: hidden;
        &.hasSider{
            flex-direction:row;
        }
    }
</style>