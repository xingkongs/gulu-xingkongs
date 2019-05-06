<template>
    <div>
        <div class="box">
            <h3>例1</h3>
            <g-layout class="layout--wrapper">
                <g-header class="header">header</g-header>
                <g-content class="contenter">content</g-content>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
            <g-collapse single :selected.sync="selectedArray">
                <g-collapse-item title="源码" name="1">
                    <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </g-collapse-item>
            </g-collapse>
        </div>
        <div class="box">
            <h3>例2</h3>
            <g-layout class="layout--wrapper">
                <g-header class="header">header</g-header>
                <g-layout>
                    <g-sider class="sider">sider</g-sider>
                    <g-content class="contenter">content</g-content>
                </g-layout>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
            <g-collapse single :selected.sync="selectedArray">
                <g-collapse-item title="源码" name="2">
                    <pre><code>{{content2.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </g-collapse-item>
            </g-collapse>
        </div>

        <div class="box">
            <h3>例3</h3>
            <g-layout class="layout--wrapper">
                <g-header class="header">header</g-header>
                <g-layout>
                    <g-content class="contenter">content</g-content>
                    <g-sider class="sider">sider</g-sider>
                </g-layout>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
            <g-collapse single :selected.sync="selectedArray">
                <g-collapse-item title="源码" name="3">
                    <pre><code>{{content3.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </g-collapse-item>
            </g-collapse>
        </div>

        <div class="box">
            <h3>例4</h3>
            <g-layout class="layout--wrapper">
                <g-sider class="sider">sider</g-sider>
                <g-layout>
                    <g-header class="header">header</g-header>
                    <g-content class="contenter">content</g-content>
                    <g-footer class="footer">footer</g-footer>
                </g-layout>
            </g-layout>
            <g-collapse single :selected.sync="selectedArray">
                <g-collapse-item title="源码" name="4">
                    <pre><code>{{content4.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </g-collapse-item>
            </g-collapse>
        </div>
    </div>
</template>
<script>
    import GuluLayOut from "../../../src/layout/layout";
    import GuluHeader from "../../../src/layout/header";
    import GuluContent from "../../../src/layout/content";
    import GuluFooter from "../../../src/layout/footer";
    import GuluSider from "../../../src/layout/sider";
    import GuluCollapse from "../../../src/collapse/collapse";
    import GuluCollapseItem from "../../../src/collapse/collapseItem";
    export default {
        name: "layout-demo",
        components: {
            "g-layout": GuluLayOut,
            "g-header": GuluHeader,
            "g-content": GuluContent,
            "g-footer": GuluFooter,
            "g-sider": GuluSider,
            "g-collapse": GuluCollapse,
            "g-collapse-item": GuluCollapseItem,
        },
        data() {
            return {
                selectedArray: [],
                content1: `
<g-layout class="layout--wrapper">
    <g-header class="header">header</g-header>
    <g-content class="content">content</g-content>
    <g-footer class="footer">footer</g-footer>
</g-layout>
                `,
                content2: `
<g-layout class="layout--wrapper">
    <g-header class="header">header</g-header>
    <g-layout>
        <g-sider class="sider">sider</g-sider>
        <g-content class="content">content</g-content>
    </g-layout>
    <g-footer class="footer">footer</g-footer>
</g-layout>
`,
                content3: `
<div class="box">
<g-layout class="layout--wrapper">
    <g-header class="header">header</g-header>
    <g-layout>
        <g-content class="content">content</g-content>
        <g-sider class="sider">sider</g-sider>
    </g-layout>
    <g-footer class="footer">footer</g-footer>
</g-layout>
                `,
                content4: `
<div class="box">
<g-layout class="layout--wrapper">
    <g-sider class="sider">sider</g-sider>
    <g-layout>
        <g-header class="header">header</g-header>
        <g-content class="content">content</g-content>
        <g-footer class="footer">footer</g-footer>
    </g-layout>
</g-layout>
                `
            };
        }
    };
</script>


<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .box {
        overflow: hidden;
        padding: 20px;
        margin: 20px;
        border: 1px solid #f0f0f0;
    }

    h3 {
        margin-bottom: 20px;
    }

    .layout--wrapper {
        min-height: 30vh;
    }

    .sider {
        width: 100px;
        background: lighten(blueviolet, 20%);
        padding: 24px 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header {
        background: lighten(blueviolet, 40%);
        padding: 24px 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contenter {
        background: lighten(blueviolet, 30%);
        min-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .footer {
        background: lighten(blueviolet, 40%);
        padding: 24px 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .g-collapse {
        border: none;
        margin: 20px auto;
    }

    .g-collapse-item > .g-collapse-title {
        display: inline-block;
    }
</style>