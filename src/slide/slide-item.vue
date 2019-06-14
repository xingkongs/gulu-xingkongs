<template>
    <div class="g-slide-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "slide-item"
    };
</script>

<style scoped lang="scss">
    .g-slide-item {
        display: flex;
        justify-content: center;
        align-content: center;
    }
</style>