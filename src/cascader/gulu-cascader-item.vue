<template>
    <div class="g-cascader-item">
        {{itemSource.name}}
        <GuluCascaderitem v-if="itemSource.children" v-for="item in itemSource.children" :item-source="item">
            {{itemSource.name}}
        </GuluCascaderitem>
    </div>

</template>

<script>
    import GuluCascaderitem from "./gulu-cascader-item";
    export default {
        name: "GuluCascaderitem",
        components: {
            GuluCascaderitem
        },
        props: {
            itemSource: {
                type: Object
            }
        }
    };
</script>

<style scoped lang="scss">
    .g-cascader-item {
        border: 1px solid red;
        margin: 10px;
    }
</style>