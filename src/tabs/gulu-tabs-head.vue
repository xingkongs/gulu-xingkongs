<template>
    <div class="g-tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsHead",
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',(name,item)=>{
                let {width,height,left,top} = item.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-head{
        display:flex;
        border:1px solid #eee;
        position: relative;
        & .line{
            position: absolute;
            bottom:0;
            width:100px;
            border:1px solid blue;
            transition:all 200ms ease-in;
        }
        & .actions{
            margin-left:auto;
        }
    }
</style>