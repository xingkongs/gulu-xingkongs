<template>
    <div class="box">
        <g-collapse class="example" single :selected.sync="selectedArray">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
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
    import GuluCollapse from "../../../src/collapse/collapse";
    import GuluCollapseItem from "../../../src/collapse/collapseItem";
    export default {
        name: "toast-demo",
        components: {
            "g-collapse": GuluCollapse,
            "g-collapse-item": GuluCollapseItem,
        },
        data() {
            return {
                preVisible: [false],
                selectedArray: ["2", "5"],
                content1: `
<g-collapse single :selected.sync="selectedArray">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`,
                content: `
                selectedArray: ["2", "5"],
                `
            };
        },
        methods: {
            toggle(index) {
                this.preVisible.splice(index, 1, !this.preVisible[index]);
            },
            showTop() {
                this.showToast("top");
            },
            showMiddle() {
                this.showToast("middle");
            },
            showBottom() {
                this.showToast("bottom");
            },
            showToast(position) {
                this.$toast(`你的余额为${parseInt(Math.random() * 100)}。请充值...`, {
                    closeButton: {
                        text: "知道了",
                        callback(toast) {
                            toast.test();
                        }
                    },
                    enableHtml: true,
                    autoClose: false,
                    position
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "./common";
</style>