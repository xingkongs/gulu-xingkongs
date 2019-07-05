<template>
    <div class="g-sub-nav">
        <span>
            <slot name="title"></slot>
        </span>
        <div class="g-sub-nav-popover">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluSubNav"
    };
</script>

<style scoped lang="scss">
    .g-sub-nav {
        position: relative;
        padding: 0.5em 1em;
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid #000;
            white-space: nowrap;
        }
    }
</style>