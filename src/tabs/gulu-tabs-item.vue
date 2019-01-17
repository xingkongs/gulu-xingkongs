<template>
    <div class="g-tabs-item" @click="clickItem" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsItem",
        inject:['eventBus'],
        data(){
          return {
              active:false
          }
        },
        props:{
            name:{
                type:[String,Number],
                required:true
            }
        },
        computed:{
            classes(){
               return {
                   active:this.active
               }
            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(name,vm)=>{
                this.active = name === this.name;
            })
        },
        methods:{
            clickItem(){
                this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../style/var';
    .g-tabs-item{
        height: $height;
        padding:0 2em;
        cursor: pointer;
        &.active{
            color:blue;
        }
    }
</style>