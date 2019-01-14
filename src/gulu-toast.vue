<template>
    <div class="g-toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "GuluToast"
    }
</script>
<style scoped lang="scss">
    @import './style/var';
    .g-toast {
        font-size: $font-size;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        height: $height;
        padding: 0.2em 0.5em;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: $border-radius;
    }
</style>