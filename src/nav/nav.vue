<template>
    <div class="gulu-nav">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluNav",
        data() {
            return {
                items: []
            };
        },
        props: {
            selected: {
                type: Array,
                default: () => []
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        provide() {
            return {
                root: this
            };
        },
        mounted() {
            this.updateChildren();
            this.listenToItems();
        },
        updated() {
            this.updateChildren();
        },
        methods: {
            addItems(vm) {
                this.items.push(vm);
            },
            listenToItems() {
                this.items.map(item => {
                    item.$on("add:selected", (name) => {
                        if (this.multiple) {
                            if (this.selected.indexOf(name) < 0) {
                                const copy = JSON.parse(JSON.stringify(this.selected));
                                copy.push(name);
                                this.$emit("update:selected", copy);
                            }
                        } else {
                            this.$emit("update:selected", [name]);
                        }
                    });
                });
            },
            updateChildren() {
                this.items.map(item => {
                    item.selected = this.selected.indexOf(item.name) >= 0;
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "style/var";
    .gulu-nav {
        display: flex;
        align-items: center;
        border-bottom: 1px solid $grey;
        & > * {
            cursor: pointer;
            user-select: none;
            &.selected {
                cursor: default;
            }
        }
    }
</style>