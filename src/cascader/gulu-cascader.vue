<template>
    <div class="g-cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <span>{{result}}</span>
            <g-icon class="icon" name="down"></g-icon>
        </div>
        <div class="popover" v-if="popoverVisible">
            <gulu-cascader-items :items="source" :height="height"
                    :selected="selected"
                    @update:selected="updateSelected"></gulu-cascader-items>
        </div>
    </div>
</template>

<script>
    import GuluCascaderItems from "./gulu-cascader-items";
    import GuluIcon from "../gulu-icon";
    export default {
        name: "GuluCascader",
        data() {
            return {
                popoverVisible: true
            };
        },
        props: {
            source: {
                type: Array
            },
            height: {
                type: String
            },
            selected: {
                type: Array,
                default: () => []
            }
        },
        components: {
            GuluCascaderItems,
            GIcon: GuluIcon
        },
        computed: {
            result() {
                return this.selected.map(item => item.name).join("/");
            }
        },
        methods: {
            updateSelected(newSelected) {
                this.$emit("update:selected", newSelected);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-cascader {
        position: relative;
        .trigger {
            min-width: 10em;
            height: $button-height;
            border: 1px solid $border-color-dark;
            border-radius: $border-radius;
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: space-between;
            padding: 0 0.8em;
            .icon {
                color: #ccc;
            }
        }
        & > .popover {
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 10px;
            z-index: 2;
            background: #fff;
            @extend %box-shadow;
        }
    }
</style>