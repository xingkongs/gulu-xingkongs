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

        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-head{

    }
</style>