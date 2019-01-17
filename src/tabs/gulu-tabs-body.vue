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

        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-body{

    }
</style>