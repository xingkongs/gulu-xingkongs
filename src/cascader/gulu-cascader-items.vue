<template>
    <div class="g-cascader-item">
        <div class="left" :style="{height:height}">
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                {{item.name}}
                <template v-if="item.name===loadingItem.name">
                    <g-icon class="icon loading" name="loading"></g-icon>
                </template>
                <template v-else>
                    <g-icon class="icon" name="right" v-if="rightArrowVisible(item)"></g-icon>
                </template>
            </div>
        </div>
        <div class="right">
            <div v-if="rightItem">
                <gulu-cascader-item :items="rightItem" :height="height"
                        :level="level+1"
                        :selected="selected"
                        :loading-item="loadingItem"
                        @update:selected="updateSelected" :load-data="loadData"></gulu-cascader-item>
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
            loadData: {
                type: Function
            },
            loadingItem: {
                type: Object,
                default: () => ({})
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
                if (this.selected[this.level]) {
                    let selected = this.items.filter(item => item.name === this.selected[this.level].name)[0];
                    if (selected && selected.children && selected.children.length) {
                        return selected.children;
                    }
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
            },
            rightArrowVisible(item) {
                return this.loadData ? !item.isLeaf : item.children;
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
            user-select: none;
            cursor: pointer;
            &:hover {
                background: $grey;
            }
            .icon {
                color: #ccc;
                &.loading {
                    @include loading
                }
            }
        }
        .right {
            border-left: 1px solid $border-color-dark;
        }
    }
</style>