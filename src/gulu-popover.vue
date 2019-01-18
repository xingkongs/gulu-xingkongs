<template>
    <div class="g-popover" @click="clickPopover">
        <div ref="contentWrapper" class="content--wrapper" v-if="visible" @click="clickContent">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "gulu-popover",
        data() {
            return {
                visible: false
            }
        },
        mounted() {

        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            listenToDocument() {
                let eventHandle = (e) => {
                    //如果你点的不是弹层 我就把弹层关掉 并删除监听
                    if (!this.$refs.contentWrapper.contains(e.target)) {
                        this.visible = false
                        document.removeEventListener('click', eventHandle)
                    }
                }
                document.addEventListener('click', eventHandle)
            },
            onShow() {
                this.$nextTick(() => {
                    //定位弹层
                    this.positionContent()
                    //监听document
                    this.listenToDocument()
                })
            },
            clickPopover(event) {
                this.$emit('click', this)
                console.log(event.target);
                //如果你点击按钮 或者按钮里面的东西 我就切换popover状态
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    console.log('按钮');
                    this.visible = !this.visible
                    //如果你是打开状态
                    if (this.visible === true) {
                        this.onShow()
                    }
                }

            },
            clickContent() {
                console.log('yyy');
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

    }

    .content--wrapper {
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid red;
        transform: translateY(-100%);
    }
</style>