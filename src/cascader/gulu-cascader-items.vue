<template>
    <div class="g-cascader-item">
        <div class="left" :style="{height:height}">
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                {{item.name}}
                <g-icon class="icon" name="right" v-if="item.children"></g-icon>
            </div>
        </div>
        <div class="right">
            <div v-if="rightItem">
                <gulu-cascader-item :items="rightItem" :height="height"
                        :level="level+1"
                        :selected="selected"
                        @update:selected="updateSelected"></gulu-cascader-item>
            </div>
        </div>

    </div>

</template>

<script>
    import GuluIcon from "../gulu-icon";
    export default {
        name: "GuluCascaderItem",
        props: {
            items: {
                type: Array
            },
            height: {
                type: String
            },
            selected: {
                type: Array,
                default: () => []
            },
            level: {
                type: Number,
                default: 0
            }
        },
        components: {
            gIcon: GuluIcon
        },
        data() {
            return {};
        },
        computed: {
            rightItem() {
                let currentSelected = this.selected[this.level];
                if (currentSelected && currentSelected.children) {
                    return currentSelected.children;
                } else {
                    return null;
                }
            }
        },
        methods: {
            onClickLabel(item) {
                let copy = JSON.parse(JSON.stringify(this.selected));
                copy[this.level] = item;
                copy.splice(this.level + 1);
                this.$emit("update:selected", copy);
            },
            updateSelected(newSelected) {
                this.$emit("update:selected", newSelected);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-cascader-item {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .left {
            padding: 0.2em 0;
            overflow: auto;
        }
        .label {
            min-width: 100px;
            padding: 0.2em 1em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon {
                color: #ccc;
            }
        }
        .right {
            border-left: 1px solid $border-color-dark;
        }
    }
</style>