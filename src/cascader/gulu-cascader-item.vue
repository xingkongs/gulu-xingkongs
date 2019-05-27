<template>
    <div class="g-cascader-item">
        {{itemSource.name}}
        <GuluCascaderItem v-if="itemSource.children" v-for="(item,i) in itemSource.children" :item-source="item"
                :key="`${item.name}${i}`">
            {{item.name}}
        </GuluCascaderItem>
    </div>

</template>

<script>
    export default {
        name: "GuluCascaderItem",
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