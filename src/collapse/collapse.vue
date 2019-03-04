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
            this.eventBus.$emit('update:selected',this.selected)
            this.eventBus.$on('update:addSelected',names=>{
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                if(this.single){
                    selectedCopy = [names]
                }else{
                    selectedCopy.push(names)
                }
                this.eventBus.$emit('update:selected',selectedCopy)
                this.$emit('update:selected',selectedCopy)
            })
            this.eventBus.$on('update:removeSelected',names=>{
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(names)
                selectedCopy.splice(index,1)
                this.eventBus.$emit('update:selected',selectedCopy)
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