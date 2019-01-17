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