<template>
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
        <div class="toggerWrapper">
            <span class="toggleSpan" @click="toggle(0)">< ></span>
            <template v-if="preVisible[0]">
                <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
            </template>
        </div>
    </div>
</template>

<script>
    import slide from "../../../src/slide/slide";
    import slideItem from "../../../src/slide/slide-item";
    export default {
        name: "toast-demo",
        components: {
            "gSlide": slide,
            "GSlideItem": slideItem
        },
        data() {
            return {
                selected: "1",
                selectedArray: ["1"],
                preVisible: [false],
                selectedTab: "women",
                content1: `
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
                `
            };
        },
        methods: {
            toggle(index) {
                this.preVisible.splice(index, 1, !this.preVisible[index]);
            },
        }
    };
</script>

<style scoped lang="scss">
    @import "./common";
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