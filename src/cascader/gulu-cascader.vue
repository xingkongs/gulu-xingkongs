<template>
    <div class="g-cascader" ref="cascader" v-click-out-side="close">
        <div class="trigger" @click="toggle">
            <span>{{result}}</span>
            <g-icon class="icon" name="down"></g-icon>
        </div>
        <div class="popover" v-if="popoverVisible&&source.length">
            <gulu-cascader-items :items="source" :height="height"
                    :selected="selected"
                    :loading-item="loadingItem"
                    @update:selected="updateSelected" :loadData="loadData"></gulu-cascader-items>
        </div>
    </div>
</template>

<script>
    import GuluCascaderItems from "./gulu-cascader-items";
    import GuluIcon from "../gulu-icon";
    import ClickOutSide from "../click-outside";
    export default {
        name: "GuluCascader",
        directives: {ClickOutSide},
        data() {
            return {
                popoverVisible: false,
                loadingItem: {}
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
            },
            loadData: {
                type: Function
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
            open() {
                this.popoverVisible = true;
            },
            close() {
                this.popoverVisible = false;
            },
            toggle() {
                if (this.popoverVisible === true) {
                    this.close();
                } else {
                    this.open();
                }
            },
            updateSelected(newSelected) {
                this.$emit("update:selected", newSelected);
                let lastItem = newSelected[newSelected.length - 1];
                let simplest = (children, id) => {
                    return children.filter(item => item.id === id)[0];
                };
                let complex = (children, id) => {
                    let noChildren = [];
                    let hasChildren = [];
                    children.forEach(item => {
                        if (item.children) {
                            hasChildren.push(item);
                        } else {
                            noChildren.push(item);
                        }
                    });
                    let found = simplest(noChildren, id);
                    if (found) {
                        return found;
                    } else {
                        found = simplest(hasChildren, id);
                        if (found) {
                            return found;
                        } else {
                            for (let i = 0; i < hasChildren.length; i++) {
                                found = complex(hasChildren[i].children, id);
                                if (found) {
                                    return found;
                                }
                            }
                            return undefined;
                        }
                    }
                };
                let updateSource = (result) => {
                    this.loadingItem = {};
                    let copy = JSON.parse(JSON.stringify(this.source));
                    let updateTo = complex(copy, lastItem.id);
                    updateTo.children = result;
                    this.$emit("update:source", copy);
                };
                if (!lastItem.isLeaf && this.loadData) {
                    this.loadData(lastItem, updateSource);
                    this.loadingItem = lastItem;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-cascader {
        display: inline-block;
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