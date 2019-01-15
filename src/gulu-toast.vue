<template>
    <div class="g-toast" ref="toastWrapper" :class="toastClasses">
        <div class="toast_content">
            <slot v-if="!enableHtml"></slot>
            <div v-else="enableHtml" v-html="$slots.default[0]"></div>
        </div>
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
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default:'top',
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClasses() {
                return {[`position-${this.position}`]: true}
            }
        },
        mounted() {
            if (this.autoClose) {
                let timer = setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(() => {
                this.$refs.line.style.height = `
                ${this.$refs.toastWrapper.getBoundingClientRect().height}px
            `
            })

        },
        methods: {
            close() {
                this.$el.remove()
                this.$emit('beforeClose')
                this.$destroy()
            },
            clickButton() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            },
            test() {
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
        left: 50%;
        color: $toast-color;
        min-height: $toast-min-height;
        padding: 0 0.8em;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: $border-radius;
        &.position-top{
            top: 0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%,-50%);
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
        }
        & .toast_content {
            padding: 0.5em 0;
        }

        & .closeButton {
            border: none;
            background: transparent;
            color: inherit;
            padding-left: 0.5em;
            flex-shrink: 0;
            cursor: pointer;
        }

        & .line {
            border-left: 1px solid #fff;
            margin-left: 0.5em;
        }
    }
</style>