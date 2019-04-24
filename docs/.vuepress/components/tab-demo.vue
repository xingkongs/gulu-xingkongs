<template>
    <div class="box">
        <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
            <g-tabs-head>
                <template slot="actions">
                    <g-button>设置</g-button>
                </template>
                <g-tabs-item name="women">
                    <g-icon name="thumbs-up"></g-icon>
                    美女
                </g-tabs-item>
                <g-tabs-item name="special">专题</g-tabs-item>
                <g-tabs-item name="finance" disabled>财经</g-tabs-item>
                <g-tabs-item name="sports">体育</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                <g-tabs-pane name="special">专题相关资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import GuluTabsHead from '../../../src/tabs/gulu-tabs-head'
    import GuluTabsBody from '../../../src/tabs/gulu-tabs-body'
    import GuluTabsItem from '../../../src/tabs/gulu-tabs-item'
    import GuluTabsPane from '../../../src/tabs/gulu-tabs-pane'
    import GuluTabs from '../../../src/tabs/gulu-tabs'
    import GuluIcon from '../../../src/gulu-icon'
    import GuluButton from '../../../src/gulu-button'

    export default {
        name: "tab-demo",
        components: {
            'g-tabs-head': GuluTabsHead,
            'g-tabs-body': GuluTabsBody,
            'g-tabs-item': GuluTabsItem,
            'g-tabs-pane': GuluTabsPane,
            'g-tabs': GuluTabs,
            'g-icon': GuluIcon,
            'g-button': GuluButton
        },
        data() {
            return {
                selectedTab:"women",
                content: `
                <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
                    <g-tabs-head>
                        <template slot="actions">
                            <g-button>设置</g-button>
                        </template>
                        <g-tabs-item name="women">
                            <g-icon name="thumbs-up"></g-icon>
                            美女
                        </g-tabs-item>
                        <g-tabs-item name="special">专题</g-tabs-item>
                        <g-tabs-item name="finance" disabled>财经</g-tabs-item>
                        <g-tabs-item name="sports">体育</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                        <g-tabs-pane name="special">专题相关资讯</g-tabs-pane>
                        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                        <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>`.replace(/^ {11}/gm, '').trim()
            }
        },
        methods: {
            yyy(message){
                console.log(message);
            },
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
    .g-tabs{
        min-height: 30vh;
    }
</style>