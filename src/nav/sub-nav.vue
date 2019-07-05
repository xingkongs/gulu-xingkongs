<template>
    <div class="g-sub-nav">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="g-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluSubNav",
        data() {
            return {
                open: false
            };
        },
        methods: {
            onClick() {
                this.open = !this.open;
            }
        }
    };
</script>

<style scoped lang="scss">
    .g-sub-nav {
        position: relative;
        & > span {
            display: inline-block;
            vertical-align: top;
            padding: 0.5em 1em;
        }
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid #000;
            white-space: nowrap;
        }
    }
</style>