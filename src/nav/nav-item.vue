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
    .gulu-nav-item {
        padding: 0.5em 1em;
        &.selected {
            background: red;
        }
    }
</style>