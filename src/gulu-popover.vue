<template>
    <div class="g-popover" ref="popover">
        <div ref="contentWrapper" class="content--wrapper" v-if="visible" @click="clickContent"
             :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
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
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.clickPopover)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        },
        destroyed(){
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.clickPopover)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        computed: {
            openEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseenter'
                }
            },
            closeEvent() {
                if (this.trigger === 'click') {
                    return 'click'
                } else {
                    return 'mouseleave'
                }
            }
        },
        methods: {
            positionContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                let {width, height, left, top} = triggerWrapper.getBoundingClientRect()
                let {height: height2} = contentWrapper.getBoundingClientRect()
                let positions = {
                    top: {
                        left: left + window.scrollX,
                        top: top + window.scrollY
                    },
                    bottom: {
                        left: left + window.scrollX,
                        top: top + height + window.scrollY
                    },
                    left: {
                        left: left + window.scrollX,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                    right: {
                        left: left + width + window.scrollX,
                        top: top + window.scrollY + (height - height2) / 2
                    },
                }
                contentWrapper.style.left = positions[this.position].left + 'px'
                contentWrapper.style.top = positions[this.position].top + 'px'
            },
            onClickDocument(e) {
                if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
                    return
                }
                if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {
                    return
                }
                this.close()
                console.log('document close');
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            clickPopover(event) {
                this.$emit('click', this);
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                        console.log('popover close');
                    } else {
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
        max-width: 20em;
        word-break: break-word;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #333;
        background: #fff;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.75));
        padding: 0.5em 1em;
        border-radius: $border-radius;
        &::before, &::after {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            border: 10px solid transparent;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -15px;
            &::before {
                top: 100%;
                border-top-color: #000;
                left: 10px;
            }
            &::after {
                top: calc(100% - 1px);
                border-top-color: #fff;
                left: 10px;
            }
        }
        &.position-bottom {
            margin-top: 15px;
            &::before {
                bottom: 100%;
                left: 10px;
                border-bottom-color: #000;
            }
            &::after {
                left: 10px;
                bottom: calc(100% - 1px);
                border-bottom-color: #fff;
            }
        }
        &.position-left {
            margin-left: -15px;
            transform: translateX(-100%);
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                left: 100%;
                border-left-color: #000;
            }
            &::after {
                left: calc(100% - 1px);
                border-left-color: #fff;
            }
        }
        &.position-right {
            margin-left: 15px;
            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                right: 100%;
                border-right-color: #000;
            }
            &::after {
                right: calc(100% - 1px);
                border-right-color: #fff;
            }
        }
    }
</style>