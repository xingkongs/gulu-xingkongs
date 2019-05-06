<template>
    <div class="g-collapse-item">
        <div class="g-collapse-title" @click="toggle">
            {{title}}
        </div>
        <div class="g-content" v-if="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapseItem",
        data() {
            return {
                visible: false,
            };
        },
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        inject: ["eventBus"],
        mounted() {
            this.eventBus && this.eventBus.$on("update:selected", names => {
                this.visible = names.indexOf(this.name) >= 0;
            });
        },
        methods: {
            toggle() {
                if (this.visible === true) {
                    this.eventBus && this.eventBus.$emit("update:removeSelected", this.name);
                } else {
                    this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../style/var";

    .g-collapse-item {
        & > .g-collapse-title {
            margin-left: -1px;
            margin-right: -1px;
            margin-top: -1px;
            user-select: none;
            cursor: pointer;
            border: 1px solid #ccc;
            background: #f0f0f0;
        }

        &:first-child .g-collapse-title {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
            margin-top: -1px;
        }

        &:last-child .g-collapse-title:last-child {
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            margin-bottom: -1px;
        }

    }
</style>