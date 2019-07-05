<template>
    <div id="app">
        <div class="box">
            <g-nav :selected.sync="selected">
                <g-nav-item name="home">首页</g-nav-item>
                <g-sub-nav>
                    <template slot="title">关于</template>
                    <g-nav-item name="culture">企业文化</g-nav-item>
                    <g-nav-item name="developers">开发者</g-nav-item>
                    <g-sub-nav>
                        <template slot="title">联系方式</template>
                        <g-nav-item name="wechat">微信</g-nav-item>
                        <g-nav-item name="qq">QQ</g-nav-item>
                        <g-sub-nav>
                            <template slot="title">手机</template>
                            <g-nav-item name="cm">移动</g-nav-item>
                            <g-nav-item name="cn">联通</g-nav-item>
                            <g-nav-item name="cx">电信</g-nav-item>
                        </g-sub-nav>
                    </g-sub-nav>
                </g-sub-nav>
                <g-nav-item name="hire">招聘</g-nav-item>
            </g-nav>
        </div>
    </div>
</template>

<script>
    import "./app";
    export default {
        name: "demo",
        data() {
            return {
                selected: ["culture"]
            };
        },
        created() {
        },
        destroyed() {
        },
        methods: {}
    };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .box {
        margin: 50px auto 80px;
        padding: 2px;
    }
</style>