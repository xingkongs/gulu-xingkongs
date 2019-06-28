<template>
    <div class="g-slide">
        <div class="g-slide-window">
            <div class="g-slide-inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slide",
        data() {
            return {
                arr: []
            };
        },
        props: {
            selected: {
                type: String
            }
        },
        mounted() {
            this.updateChildren();
        },
        updated() {
            this.updateChildren();
        },
        methods: {
            updateChildren() {
                let first = this.$children[0];
                let selected = this.selected || first.name;
                this.$children.forEach(item => {
                    item.selected = selected;
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    .g-slide {
        display: inline-block;
        vertical-align: middle;
        &-window {
            overflow: hidden;
        }
        &-inner {
            position: relative;
        }
    }
</style>