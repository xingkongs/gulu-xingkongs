<template>
    <div class="g-cascader-item">
        <div class="left" :style="{height:height}">
            <div class="label" v-for="item in items" @click="leftSelected=item">
                {{item.name}}
                <g-icon class="icon" name="right" v-if="item.children"></g-icon>
            </div>

        </div>
        <div class="right">
            <div v-if="rightItem">
                <gulu-cascader-item :items="rightItem" :height="height"></gulu-cascader-item>
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
            }
        },
        components: {
            gIcon: GuluIcon
        },
        data() {
            return {
                leftSelected: null
            };
        },
        computed: {
            rightItem() {
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children;
                } else {
                    return null;
                }
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