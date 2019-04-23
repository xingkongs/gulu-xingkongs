<template>
    <div class="g-tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actionsWrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsHead",
        inject:['eventBus'],
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected',(name,item)=>{
                let wrapperLeft = document.querySelector(".g-tabs-head").getBoundingClientRect().left;
                let {width,height,left,top} = item.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left-wrapperLeft}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-head{
        display:flex;
        border-bottom:1px solid #eee;
        position: relative;
        & .line{
            position: absolute;
            bottom:0;
            width:100px;
            border:1px solid blue;
            transition:all 200ms ease-in;
        }
        & .actionsWrapper{
            margin-left:auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>