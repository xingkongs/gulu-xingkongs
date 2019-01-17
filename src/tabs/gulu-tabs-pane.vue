<template>
    <div class="g-tabs-pane" @click="clickPane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsPane",
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', name => {
                this.active = name === this.name;
            })
        },
        props: {
            name: {
                type: String,
                required: true
            }
        },
        methods: {
            clickPane() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-tabs-pane {
        &.active{
            background: red;
        }
    }
</style>