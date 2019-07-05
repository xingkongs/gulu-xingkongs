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
    @import "style/var";
    .g-sub-nav {
        position: relative;
        & > span {
            display: block;
            padding: 0.5em 1em;
        }
        &-popover {
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 0.5em;
            white-space: nowrap;
            box-shadow: 0 0 3px fade_out(black, 0.8);
            font-size: $font-size;
            color: #666;
            min-width: 8em;
            & > .selected {
                &::after {
                    display: none;
                }
                color: $color;
                background: fade_out($grey, 0.4);
            }
        }
    }
    .g-sub-nav .g-sub-nav .g-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 0.5em;
    }
</style>