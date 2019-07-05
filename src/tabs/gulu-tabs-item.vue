<template>
    <div class="g-tabs-item" @click="clickItem" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsItem",
        inject: ["eventBus"],
        data() {
            return {
                active: false
            };
        },
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                };
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on("update:selected", (name, vm) => {
                this.active = name === this.name;
            });
        },
        methods: {
            clickItem() {
                if (this.disabled) {return;}
                this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
                this.$emit("click", this);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../style/var';
    .g-tabs-item {
        height: $height;
        padding: 0 2em;
        cursor: pointer;
        user-select: none;
        &.active {
            font-weight: bold;
        }
        &.disabled {
            color: $tabs-disabled-text;
            cursor: default;
        }
    }
</style>