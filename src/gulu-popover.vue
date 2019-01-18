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
            clickPopover(event) {
                this.$emit('click',this)
                console.log(event.target);
                if(this.$refs.triggerWrapper.contains(event.target)){
                    console.log('按钮');
                    this.visible = !this.visible
                    if (this.visible === true) {
                        this.$nextTick(() => {
                            document.body.appendChild(this.$refs.contentWrapper)
                            let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                            let eventHandle = (e) => {
                                if(!this.$refs.contentWrapper.contains(e.target)){
                                    if (this.visible === true) {
                                        this.visible = false
                                        document.removeEventListener('click', eventHandle)
                                    }
                                }
                            }
                            document.addEventListener('click', eventHandle)
                        })
                    } else {
                    }
                }else{
                    console.log('其他');
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