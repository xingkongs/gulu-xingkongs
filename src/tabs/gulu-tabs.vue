<template>
    <div class="g-tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GuluTabs",
        data(){
            return {
                eventBus:new Vue()
            }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        mounted(){
            this.$emit('update:select','这是 this.$emit 出来的数据')
            this.eventBus.$emit('update:select','这是 eventBus $emit 出来的数据')
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs{

    }
</style>