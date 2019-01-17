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
            // console.log('爷爷给pane的eventBus')
            // console.log(this.eventBus);
            this.eventBus.$on('update:select',name=>{
                console.log(name);
            })
        },
        props:{
          name:{
              type:[String,Number],
              required:true
          }
        },
        methods:{
            clickPane(){
                this.eventBus.$emit('update:select',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-pane{

    }
</style>