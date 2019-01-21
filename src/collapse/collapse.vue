<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "GuluCollapse",
        data() {
            return {
                eventBus: new Vue()
            }
        },
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }

        },
        mounted(){
            //初始化
            this.eventBus.$emit('update:selected',this.selected)
            //新增
            this.eventBus.$on('update:addSelected',names=>{
                //拷贝selected
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                if(this.single){
                    selectedCopy = [names]
                }else{
                    selectedCopy.push(names)
                }
                //eventbus 中触发 新增后的 selectedCopy
                this.eventBus.$emit('update:selected',selectedCopy)
                //更新外部selected
                this.$emit('update:selected',selectedCopy)
            })
            //删除
            this.eventBus.$on('update:removeSelected',names=>{
                //拷贝
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                //操作拷贝数据
                let index = selectedCopy.indexOf(names)
                selectedCopy.splice(index,1)
                //触发event bus
                this.eventBus.$emit('update:selected',selectedCopy)
                //更新到外部
                this.$emit('update:selected',selectedCopy)
            })
        }
    }
</script>

<style scoped lang="scss">
    @import "../style/var";

    .g-collapse {
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>