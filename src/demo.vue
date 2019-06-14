<template>
    <div id="app">
        <div class="box">
            <g-slide>
                <div>1</div>
                <div>2</div>
                <div>3</div>
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
            "g-slide": slide,
            "g-slide-item": slideItem
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
</style>