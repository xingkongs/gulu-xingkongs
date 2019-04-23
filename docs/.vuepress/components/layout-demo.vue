<template>
    <div>
        <div class="box">
            <g-layout class="layout--wrapper">
                <g-header class="header">header</g-header>
                <g-content class="content">content</g-content>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
        </div>
        <div class="box">
            <g-layout class="layout--wrapper">
                <g-header class="header">header</g-header>
                <g-layout>
                    <g-sider class="sider">sider</g-sider>
                    <g-content class="content">content</g-content>
                </g-layout>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
        </div>

        <div class="box">
            <g-layout class="layout--wrapper">
                <g-header class="header">header</g-header>
                <g-layout>
                    <g-content class="content">content</g-content>
                    <g-sider class="sider">sider</g-sider>
                </g-layout>
                <g-footer class="footer">footer</g-footer>
            </g-layout>
        </div>

        <div class="box">
            <g-layout class="layout--wrapper">
                <g-sider class="sider">sider</g-sider>
                <g-layout>
                    <g-header class="header">header</g-header>
                    <g-content class="content">content</g-content>
                    <g-footer class="footer">footer</g-footer>
                </g-layout>
            </g-layout>
        </div>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GuluLayOut from '../../../src/layout/layout'
    import GuluHeader from '../../../src/layout/header'
    import GuluContent from '../../../src/layout/content'
    import GuluFooter from '../../../src/layout/footer'
    import GuluSider from '../../../src/layout/sider'

    export default {
        name: "layout-demo",
        components: {
            'g-layout': GuluLayOut,
            'g-header': GuluHeader,
            'g-content': GuluContent,
            'g-footer': GuluFooter,
            'g-sider': GuluSider,
        },
        data() {
            return {
                content: `
<div class="box">
    <g-layout class="layout--wrapper">
        <g-header class="header">header</g-header>
        <g-content class="content">content</g-content>
        <g-footer class="footer">footer</g-footer>
    </g-layout>
</div>
<div class="box">
    <g-layout class="layout--wrapper">
        <g-header class="header">header</g-header>
        <g-layout>
            <g-sider class="sider">sider</g-sider>
            <g-content class="content">content</g-content>
        </g-layout>
        <g-footer class="footer">footer</g-footer>
    </g-layout>
</div>
<div class="box">
    <g-layout class="layout--wrapper">
        <g-header class="header">header</g-header>
        <g-layout>
            <g-content class="content">content</g-content>
            <g-sider class="sider">sider</g-sider>
        </g-layout>
        <g-footer class="footer">footer</g-footer>
    </g-layout>
</div>
<div class="box">
    <g-layout class="layout--wrapper">
        <g-sider class="sider">sider</g-sider>
        <g-layout>
            <g-header class="header">header</g-header>
            <g-content class="content">content</g-content>
            <g-footer class="footer">footer</g-footer>
        </g-layout>
    </g-layout>
</div>`.replace(/^ {11}/gm, '').trim()
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
        margin:20px auto;
    }
    .sider{
        width:300px;
        background: lighten(blueviolet,10%);
    }
    .header{
        background: lighten(blueviolet,40%);
    }
    .content{
        background: lighten(blueviolet,30%);
    }
    .footer{
        background: lighten(blueviolet,20%);
    }
</style>