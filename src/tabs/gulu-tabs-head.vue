<template>
    <div class="g-tabs-head">
        <slot></slot>
        <div class="actions">
        <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsHead",
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',(name,item)=>{
                console.log(name,item);
            })
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-head{
        display:flex;
        border:1px solid #eee;
        & .actions{
            margin-left:auto;
        }
    }
</style>