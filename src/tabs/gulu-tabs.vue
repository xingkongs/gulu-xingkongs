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
            //遍历子组件 将默认被选中的子组件作为第二个参数,传到回调里
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "GuluTabsHead"){
                    vm.$children.map(childVm=>{
                        if(childVm.$options.name === "GuluTabsItem"
                            && childVm.name === this.selected){ //props.name
                            console.log(childVm.$el);
                            this.eventBus.$emit('update:selected',this.selected,childVm)
                        }
                    })
                }
            })

        }
    }
</script>

<style scoped lang="scss">
    .g-tabs{

    }
</style>