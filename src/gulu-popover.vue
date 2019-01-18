<template>
    <div class="g-popover" @click.stop="clickPopover"><!--阻止事件冒泡-->
        <div class="content--wrapper" v-if="visible" @click.stop><!--阻止事件冒泡-->
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "gulu-popover",
        data(){
            return {
                visible:false
            }
        },
        methods:{
            clickPopover(){
                // document.addEventListener('click',function eventHandle(){
                //     this.xxx
                //     document.removeEventListener('click',eventHandle)
                // }.bind(this))
                //
                // 添加一个click监听事件
                // 如果 不提取出 eventHandle 函数
                // 需要在 function eventHandle 里用this 所以需要bind(this)
                // function fn(){}.bind(this) 会生成一个新的函数
                // 这样添加监听函数 所绑定的回调 是新生成的函数 而不是 看到的 eventHandle函数
                // 当 在函数里 删除 监听时 删除的是 eventHandle函数 而不是 新生成的函数
                //
                // 一句话概括就是:
                //     事件监听 和 事件移除 的不是一个函数
                //
                // 怎么办呢?
                //
                //     把函数提取出来 并使用箭头函数
                //
                // let eventHandel = () => {
                //     this.xxx
                //     document.removeEventListener('click',eventHandle)
                // }
                // document.addEventListener('click',eventHandle)
                //
                // popover点击按钮 打开
                // 再次点击 关闭
                // 由于事件冒泡 这时会两次关闭popover
                // document 关闭一次
                // popover 关闭一次
                // 怎么办呢 在popover 上阻止事件冒泡
                // e.stopPropagation()
                //
                // 那点击弹层怎么不关闭呢
                // 由于监听的是父标签
                // 点击子标签 触发事件 也需要阻止默认事件
                // 在子标签这里也添加 stopPropagation()
                this.visible = !this.visible
                if(this.visible === true){
                    this.$nextTick(()=>{
                        let eventHandle = () =>{
                            if(this.visible === true){
                                this.visible = false
                                console.log('document隐藏了popover');
                                document.removeEventListener('click',eventHandle)
                            }
                        }
                        document.addEventListener('click',eventHandle)
                    })
                }else{

                    console.log('vm隐藏了popover')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.g-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    & .content--wrapper{
        position: absolute;
        bottom:100%;
        left:0;
        border:1px solid red;
    }
}
</style>