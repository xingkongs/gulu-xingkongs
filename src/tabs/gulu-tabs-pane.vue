<template>
    <div class="g-tabs-pane" @click="clickPane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsPane",
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',name=>{
            })
        },
        props:{
          name:{
              type:String,
              required:true
          }
        },
        methods:{
            clickPane(){
                this.eventBus.$emit('update:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-pane{

    }
</style>