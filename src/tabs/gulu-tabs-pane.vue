<template>
    <div class="g-tabs-pane" @click="clickPane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsPane",
        inject:['eventBus'],
        data(){
          return {
              active:false
          }
        },
        mounted(){
            this.eventBus.$on('update:selected',name=>{
                if(name === this.name){
                    console.log(`pane ${this.name}被选中了`)
                }else{
                    console.log(`pane${this.name}没有被选中`)
                }
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