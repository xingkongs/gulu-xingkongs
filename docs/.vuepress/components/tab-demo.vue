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
                <g-tabs-item name="sports">体育</g-tabs-item>
                <g-tabs-item name="finance" disabled>财经</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                <g-tabs-pane name="special">专题相关资讯</g-tabs-pane>
                <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
                <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        <div class="toggerWrapper">
            <span class="toggleSpan" @click="toggle(0)">< ></span>
            <template v-if="preVisible[0]">
                <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                <pre><code>{{content.replace(/^ {11}/gm, "").trim()}}</code></pre>
            </template>
        </div>
    </div>
</template>

<script>
    import GuluTabsHead from "../../../src/tabs/gulu-tabs-head";
    import GuluTabsBody from "../../../src/tabs/gulu-tabs-body";
    import GuluTabsItem from "../../../src/tabs/gulu-tabs-item";
    import GuluTabsPane from "../../../src/tabs/gulu-tabs-pane";
    import GuluTabs from "../../../src/tabs/gulu-tabs";
    import GuluIcon from "../../../src/gulu-icon";
    import GuluButton from "../../../src/gulu-button";
    export default {
        name: "tab-demo",
        components: {
            "g-tabs-head": GuluTabsHead,
            "g-tabs-body": GuluTabsBody,
            "g-tabs-item": GuluTabsItem,
            "g-tabs-pane": GuluTabsPane,
            "g-tabs": GuluTabs,
            "g-icon": GuluIcon,
            "g-button": GuluButton,
        },
        data() {
            return {
                preVisible: [false],
                selectedTab: "women",
                selectedArray: ["1"],
                content1: `
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
                        <g-tabs-item name="sports">体育</g-tabs-item>
                        <g-tabs-item name="finance" disabled>财经</g-tabs-item>
                    </g-tabs-head>
                    <g-tabs-body>
                        <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                        <g-tabs-pane name="special">专题相关资讯</g-tabs-pane>
                        <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
                        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                    </g-tabs-body>
                </g-tabs>`,
                content: `
selectedTab: "women",
yyy(message) {
    console.log(message);
}`
            };
        },
        methods: {
            toggle(index) {
                this.preVisible.splice(index, 1, !this.preVisible[index]);
            },
            yyy(message) {
                console.log(message);
            },
        }
    };
</script>

<style scoped lang="scss">
    @import "./common";
    .g-tabs {
        min-height: 30vh;
        padding: 10px;
        border: 1px solid #f0f0f0;
    }
    .g-tabs-pane {
        padding: 24px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>