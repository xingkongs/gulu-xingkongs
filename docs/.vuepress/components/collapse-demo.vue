<template>
    <div class="box">
        <g-collapse single :selected.sync="selectedArray">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        {{selectedTab}}
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import GuluCollapse from '../../../src/collapse/collapse'
    import GuluCollapseItem from '../../../src/collapse/collapseItem'

    export default {
        name: "toast-demo",
        components: {
            'g-collapse': GuluCollapse,
            'g-collapse-item': GuluCollapseItem,
        },
        data() {
            return {
                selectedArray:['2'],
                content: `
<g-collapse single :selected.sync="selectedArray">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
{{selectedTab}}`.replace(/^ {11}/gm, '').trim()
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
        min-height: 50vh;
    }
    .g-collapse{

    }
</style>