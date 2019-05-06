<template>
    <transition name="slide">
        <div class="g-sider" v-if="visibie">
            <slot></slot>
            <Icon v-if="slideClose" class="slide-icon" @click="visibie = false" name="close"/>
        </div>
    </transition>

</template>
<script>
    import Icon from "../gulu-icon";
    export default {
        name: "GuluSider",
        components: {
            Icon
        },
        props: {
            slideClose: Boolean,
            default: false
        },
        data() {
            return {
                visibie: true
            };
        }
    };
</script>
<style scoped lang="scss">
    .g-sider {
        position: relative;

        > .slide-icon {
            position: absolute;
            left: 100%;
            bottom: 100%;
            transform: translate(-150%, 150%);
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: margin 0.5s ease-in;
    }

    .slide-enter, .slide-leave-to {
        margin-left: -100px;
    }
</style>