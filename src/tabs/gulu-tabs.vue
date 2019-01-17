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
        props:{
          selected:{
              type:String,
              required:true
          }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        mounted(){
            this.eventBus.$emit('update:selected',this.selected)
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs{

    }
</style>