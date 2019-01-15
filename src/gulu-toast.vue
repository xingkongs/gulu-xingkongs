<template>
    <div class="wrapper" :class="toastClasses">
        <div class="g-toast" ref="toast">
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
    </div>
</template>
<script>
    export default {
        name: "GuluToast",
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: 1,
                validator(value){
                    return value === false || typeof value === 'number'
                }
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
                default: 'top',
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
                }, this.autoClose * 1000)
            }
            this.$nextTick(() => {
                this.$refs.line.style.height = `
                ${this.$refs.toast.getBoundingClientRect().height}px
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

    @keyframes fade-in {
        0% {
            opacity: 0
        }
        100% {
            opacity: 100%
        }
    }

    @keyframes slide-up {
        0% {
            transform: translateY(-100%)
        }
        100% {
            transform: translateY(0)
        }
    }

    @keyframes slide-down {
        0% {
            transform: translateY(100%)
        }
        100% {
            transform: translateY(0)
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;

            .g-toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-up $toast-animation-delay;
            }

        }

        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            animation: fade-in $toast-animation-delay;
        }

        &.position-bottom {
            bottom: 0;

            .g-toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-down $toast-animation-delay;
            }

        }
    }

    .g-toast {
        font-size: $font-size;
        background: $toast-bg;
        color: $toast-color;
        min-height: $toast-min-height;
        padding: 0 0.8em;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: $border-radius;

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