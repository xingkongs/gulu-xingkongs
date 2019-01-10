<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "button-group",
        mounted(){
            for(let node of this.$el.children){
               let name = node.nodeName.toLowerCase();
               if(name !== 'button'){
                   console.warn(`button-group的子组件应该是 g-button`)
               }
           }
        }

    }
</script>

<style lang="scss" scoped>
    @import "./style/var";
    .button-group {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;

        > .gulu-button {
            border-radius: 0;
            &:not(:first-of-type) {
                margin-left: -1px;
            }
            &:first-of-type {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }

            &:last-of-type {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }
</style>