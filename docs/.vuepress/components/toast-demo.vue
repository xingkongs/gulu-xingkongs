<template>
    <div class="box">
        <g-button @click="showTop">top</g-button>
        <g-button @click="showMiddle">middle</g-button>
        <g-button @click="showBottom">bottom</g-button>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Vue from 'vue'
    import GuluButton from '../../../src/gulu-button'
    import plugin from '../../../src/plugin'
    Vue.use(plugin)

    export default {
        name: "toast-demo",
        components: {
            'g-button': GuluButton
        },
        data() {
            return {
                selectedTab:"women",
                content: `
<g-button @click="showTop">top</g-button>
<g-button @click="showMiddle">middle</g-button>
<g-button @click="showBottom">bottom</g-button>`.replace(/^ {11}/gm, '').trim()
            }
        },
        methods: {
            showTop(){
                this.showToast('top')
            },
            showMiddle(){
                this.showToast('middle')
            },
            showBottom(){
                this.showToast('bottom')
            },
            showToast(position){
                this.$toast(`你的余额为${parseInt(Math.random()*100)}。请充值...`,{
                    closeButton:{
                        text:'知道了',
                        callback(toast){
                            toast.test()
                        }
                    },
                    enableHtml:true,
                    autoClose:false,
                    position
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .box {
        overflow: hidden;
        padding:2px;
    }
</style>