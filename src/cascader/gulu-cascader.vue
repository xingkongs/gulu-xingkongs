<template>
    <div class="g-cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible"></div>
        <div class="popover" v-if="popoverVisible">
            <gulu-cascader-items :items="source" :height="height"
                    :selected="selected"
                    @update:selected="updateSelected"></gulu-cascader-items>
        </div>
    </div>
</template>

<script>
    import GuluCascaderItems from "./gulu-cascader-items";
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
            GuluCascaderItems
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
            width: 200px;
            height: 32px;
            border: 1px solid red;
        }
        & > .popover {
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: 10px;
            @extend %box-shadow;
        }
    }
</style>