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
            onClickDocument(e){
                if (!(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
                    this.close()
                }
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close(){
                this.visible = false
                console.log('关闭');
                document.removeEventListener('click', this.onClickDocument)
            },
            clickPopover(event) {
                this.$emit('click', this);
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    console.log('按钮');
                    if (this.visible === true) {
                        this.close()
                    }else{
                        this.open()
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
    @import "./style/var";
    .g-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content--wrapper {
        max-width:20em;
        word-break: break-word;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #333;
        background: #fff;
        filter:drop-shadow(0 1px 1px rgba(0,0,0,0.75));
        transform: translateY(-100%);
        margin-top:-15px;
        padding:0.5em 1em;
        border-radius:$border-radius ;
        &::before,&::after{
            content:'';
            width:0;
            height:0;
            position: absolute;
            border:10px solid transparent;
            left:10px;
        }
        &::before{
            top:100%;
            border-top-color:#000;
        }
        &::after{
            top:calc(100% - 1px);
            border-top-color:#fff;
        }
    }
</style>