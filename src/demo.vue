<template>
    <div id="app">
        <div class="box">
            <g-nav :selected.sync="selected">
                <g-nav-item name="home">首页</g-nav-item>
                <g-nav-item name="about">关于</g-nav-item>
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
                selected: ["home"]
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
    .slide_box {
        height: 200px;
        border: 1px solid #f2f2f2;
        background: #fafafa;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>