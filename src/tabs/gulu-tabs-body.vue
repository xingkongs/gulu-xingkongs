<template>
    <div class="g-tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsBody",
        inject:['eventBus'],
        mounted(){
            // console.log('爷爷给body的eventBus')
            // console.log(this.eventBus);
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-body{

    }
</style>