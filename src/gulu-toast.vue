<template>
    <div class="g-toast" ref="toastWrapper">
        <slot v-if="!enableHtml"></slot>
        <div v-else="enableHtml" v-html="$slots.default[0]"></div>
        <template v-if="closeButton">
            <div class="line" ref="line"></div>
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
                default:50
            },
            closeButton:{
                type:Object,
                default(){
                    return {
                        text:'关闭',
                        callback:undefined
                    }
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            if(this.autoClose){
                let timer = setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
            this.$nextTick(()=>{
                this.$refs.line.style.height = `
                ${this.$refs.toastWrapper.getBoundingClientRect().height}px
            `
            })

        },
        methods:{
            close(){
                this.$el.remove()
                this.$destroy()
            },
            clickButton(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback(this)
                }
            },
            test(){
                console.log('test')
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
        min-height: $height;
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
            flex-shrink:0;
            cursor:pointer;
        }
        & .line{
            border-left:1px solid #fff;
            margin-left:0.5em;
        }
    }
</style>