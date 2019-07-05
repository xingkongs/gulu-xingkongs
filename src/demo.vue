<template>
    <div id="app">
        <div class="box">
            <g-slide :selected.sync=selected>
                <g-slide-item name="1">
                    <div class="slide_box">0</div>
                </g-slide-item>
                <g-slide-item name="2">
                    <div class="slide_box">1</div>
                </g-slide-item>
                <g-slide-item name="3">
                    <div class="slide_box">2</div>
                </g-slide-item>
            </g-slide>
        </div>
    </div>
</template>

<script>
    import "./app";
    export default {
        name: "demo",
        data() {
            return {
                selected: "1"
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