<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GuluCollapse",
        data(){
            return {
                eventBus:new Vue()
            }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-collapse{
        border:1px solid $border-color;
        border-radius: $border-radius;
    }
</style>