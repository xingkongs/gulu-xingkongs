<template>
    <div class="g-slide">
        <div class="g-slide-window">
            <div class="g-slide-inner" style="width:200px;" :style="x">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slide",
        data() {
            return {
                translateX: "0"
            };
        },
        computed: {
            x() {
                return `transform: translateX(${this.translateX}px)`;
            }
        },
        mounted() {
            setTimeout(() => {
                this.translateX = "-200";
            });
        }
    };
</script>

<style scoped lang="scss">
    .g-slide {
        display: inline-block;
        vertical-align: middle;
        &-window {
            overflow: hidden;
        }
        &-inner {
            display: flex;
            transition: 1s ease-in-out;
            & div {
                width: 200px;
                height: 200px;
                flex-shrink: 0;
                border: 1px solid #ddd;
                background: #eee;
            }
        }
    }
</style>