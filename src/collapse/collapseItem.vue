<template>
    <div class="g-collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapseItem",
        data(){
          return {
              visible:false,
              single:false
          }
        },
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        },
        inject:['eventBus'],
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected',name=>{
                if(name !== this.name){
                    if(this.single){
                        this.close()
                    }
                }else{
                    this.open()
                }
            })
        },
        methods:{
            toggle(){
                if(this.visible === true){
                    this.visible = false
                }else{
                    this.eventBus && this.eventBus.$emit('update:selected',this.name)
                }
            },
            close(){
                this.visible = false
            },
            open(){
                this.visible = true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../style/var";
    .g-collapse-item{
        & > .title{
            border: 1px solid $border-color;
            margin-left:-1px;
            margin-right:-1px;
            margin-top:-1px;
            user-select: none;
            cursor: pointer;
            background: $button-active-bg;
        }
        &:first-child .title{
            border-top-left-radius:$border-radius;
            border-top-right-radius:$border-radius;
            margin-top:-1px;
        }
        &:last-child .title:last-child{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            margin-bottom:-1px;
        }

    }
</style>