<template>
    <div class="gulu-nav">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluNav",
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
        mounted() {
            this.updateChildren();
            this.listenToItems();
        },
        computed: {
            items() {
                return this.$children.filter(vm => vm.$options.name === "GuluNavItem");
            }
        },
        updated() {
            this.updateChildren();
        },
        methods: {
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
    .gulu-nav {
        border: 1px solid red;
        display: flex;
        align-items: center;
    }
</style>