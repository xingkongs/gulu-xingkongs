<template>
    <div class="g-popover" @click="clickPopover">
        <div class="content--wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "gulu-popover",
        data(){
            return {
                visible:false
            }
        },
        methods:{
            clickPopover(){
                this.visible = !this.visible
            }
        }
    }
</script>

<style scoped lang="scss">
.g-popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    & .content--wrapper{
        position: absolute;
        bottom:100%;
        left:0;
        border:1px solid red;
    }
}
</style>