<template>
    <transition name="slide">
        <div class="g-slide-item" v-if="visible" :class="{reverse}">
            <slot></slot>
        </div>
    </transition>

</template>

<script>
    export default {
        name: "slide-item",
        data() {
            return {
                selected: undefined,
                reverse: false
            };
        },
        props: {
            name: {
                type: String,
                required: true
            }
        },
        computed: {
            visible() {
                return this.selected === this.name;
            }
        }
    };
</script>

<style scoped lang="scss">
    .g-slide-item {
        width: 100%;
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 1s;
    }
    .slide-leave-active {
        position: absolute;
        left: 0;
        top: 0;
    }
    .slide-enter {
        transform: translateX(100%);
    }
    .slide-enter.reverse {
        transform: translateX(-100%);
    }
    .slide-leave-to {
        transform: translateX(-100%);
    }
    .slide-leave-to.reverse {
        transform: translateX(100%);
    }
</style>