<template>
    <div class="g-content">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "GuluContent"
    }
</script>
<style scoped lang="scss">
    .g-content{
        flex-grow:1;
    }
</style>