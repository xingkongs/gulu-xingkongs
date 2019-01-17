<template>
    <div class="g-tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsHead",
        inject:['eventBus'],
        mounted(){
            // console.log('爷爷给head的eventBus')
            // console.log(this.eventBus);
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-head{

    }
</style>