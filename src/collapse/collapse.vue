<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapse"
    }
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-collapse{
        border:1px solid $border-color;
        border-radius: $border-radius;
    }
</style>