<template>
    <div id="app">
        <div class="box">
            <g-slide>
                <g-slide-item>
                    <div class="slide_box">1</div>
                </g-slide-item>
                <g-slide-item>
                    <div class="slide_box">2</div>
                </g-slide-item>
                <g-slide-item>
                    <div class="slide_box">3</div>
                </g-slide-item>
            </g-slide>
        </div>
    </div>
</template>

<script>
    import slide from "./slide/slide";
    import slideItem from "./slide/slide-item";
    export default {
        name: "demo",
        components: {
            "gSlide": slide,
            "GSlideItem": slideItem
        },
        data() {
            return {};
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
        margin: 50px 200px 80px;
        padding: 2px;
    }
    .slide_box {
        width: 200px;
        height: 200px;
        border: 1px solid #ddd;
        background: #eee;
    }
</style>