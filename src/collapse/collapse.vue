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
                type: String
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }

        },
        mounted(){
            this.eventBus.$emit('update:selected',this.selected)
            this.eventBus.$on('update:selected',name=>{
                this.$emit('update:selected',name)
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