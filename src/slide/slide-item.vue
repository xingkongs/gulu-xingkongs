<template>
    <transition name="slide">
        <div class="g-slide-item" v-if="visible">
            <slot></slot>
        </div>
    </transition>

</template>

<script>
    export default {
        name: "slide-item",
        data() {
            return {
                visible: false
            };
        }
    };
</script>

<style scoped lang="scss">
    .g-slide-item {
        position: absolute;
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 1s;
    }
    .slide-enter {
        transform: translateX(200px);
    }
    .slide-leave-to {
        transform: translateX(-200px);
    }
</style>