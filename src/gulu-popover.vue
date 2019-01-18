<template>
    <div class="g-popover" @click.stop="clickPopover">
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
            clickPopover() {
                this.visible = !this.visible
                if (this.visible === true) {
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                        //这里的top 只是 元素浏览器可视范围顶部距离 需要加浏览器滚动高度
                        let eventHandle = () => {
                            if (this.visible === true) {
                                this.visible = false
                                document.removeEventListener('click', eventHandle)
                            }
                        }
                        document.addEventListener('click', eventHandle)
                    })
                } else {
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
        transform:translateY(-100%);
    }
</style>