<template>
    <div class="g-toast">
        <slot></slot>
        <template v-if="closeButton">
            <div class="line"></div>
            <div class="closeButton" @click="clickButton">
                {{closeButton.text}}
            </div>
        </template>

    </div>
</template>
<script>
    export default {
        name: "GuluToast",
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default:3
            },
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:'关闭',
                        callback:()=>{
                            this.close()
                        }
                    }
                }
            }
        },
        mounted(){
            if(this.autoClose){
                let timer = setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            clickButton(){
                this.close()
                this.closeButton.callback()
            }
        }
    }
</script>
<style scoped lang="scss">
    @import './style/var';
    .g-toast {
        font-size: $font-size;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        height: $height;
        padding: 0.2em 0.5em;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: $border-radius;
        & .closeButton{
            border:none;
            background: transparent;
            color:inherit;
            padding-left:0.5em;
        }
        & .line{
            height:100%;
            border-left:1px solid #fff;
            margin-left:0.5em;
        }
    }
</style>