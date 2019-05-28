<template>
    <div class="g-cascader-item">
        <div class="left">
            <div v-for="item in items" @click="leftSelected=item">
                {{item.name}}
            </div>
        </div>
        <div class="right">
            <div v-if="rightItem">
                <gulu-cascader-item :items="rightItem"></gulu-cascader-item>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "GuluCascaderItem",
        props: {
            items: {
                type: Array
            }
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
    .g-cascader-item {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .left {
            border: 1px solid red;
        }
    }
</style>