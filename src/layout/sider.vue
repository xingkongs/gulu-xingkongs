<template>
    <transition name="slide">
        <div class="g-sider" v-if="visibie">
            <slot></slot>
            <button @click="visibie = false">X</button>
        </div>
    </transition>

</template>
<script>
    export default {
        name: "GuluSider",
        data(){
            return {
                visibie:true
            }
        }
    }
</script>
<style scoped lang="scss">
    .g-sider{
        position: relative;
    >button{
        position: absolute;
        top:0;
        right:0;
    }
    }
    .slide-enter-active,.slide-leave-active{
        transition:margin 0.5s ease-in;
    }
    .slide-enter,.slide-leave-to{
        margin-left:-300px;
    }
</style>