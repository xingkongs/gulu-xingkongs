<template>
    <div class="gulu-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluNavItem",
        data() {
            return {
                selected: false
            };
        },
        inject: ["root"],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        created() {
            this.root.addItems(this);
        },
        methods: {
            onClick() {
                this.$emit("add:selected", this.name);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "style/var";
    .gulu-nav-item {
        padding: 0.5em 1em;
        &.selected {
            position: relative;
            &::after {
                content: "";
                display: block;
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $blue;
            }
        }
    }
</style>