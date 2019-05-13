<template>
    <div class="g-cascader">
        <slot></slot>
        <CascaderItem v-for="item in source" :itemSource="item"></CascaderItem>
    </div>
</template>

<script>
    import CascaderItem from "./gulu-cascader-item";
    export default {
        name: "GuluCascader",
        props: {
            source: {
                type: Array
            }
        },
        components: {
            CascaderItem
        }
    };
</script>

<style scoped lang="scss">
    @import "../style/var";
    .cascader {
    }
</style>