<template>
    <div class="g-cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible"></div>
        <div class="popover" v-if="popoverVisible">
            <gulu-cascader-items :items="source"></gulu-cascader-items>
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
            }
        },
        components: {
            GuluCascaderItems
        }
    };
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-cascader {
        .trigger {
            width: 200px;
            height: 32px;
            border: 1px solid red;
        }
        & > .popover {
            margin-top: 10px;
        }
    }
</style>