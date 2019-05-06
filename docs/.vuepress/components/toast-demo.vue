<template>
    <div class="box">
        <g-button @click="showTop">top</g-button>
        <g-button @click="showMiddle">middle</g-button>
        <g-button @click="showBottom">bottom</g-button>
        <g-collapse single :selected.sync="selectedArray">
            <g-collapse-item title="源码" name="1">
                <pre><code>{{content.replace(/^ {11}/gm, "").trim()}}</code></pre>
            </g-collapse-item>
        </g-collapse>
    </div>
</template>

<script>
    import Vue from "vue";
    import GuluButton from "../../../src/gulu-button";
    import plugin from "../../../src/plugin";
    import GuluCollapse from "../../../src/collapse/collapse";
    import GuluCollapseItem from "../../../src/collapse/collapseItem";
    Vue.use(plugin);
    export default {
        name: "toast-demo",
        components: {
            "g-button": GuluButton,
            "g-collapse": GuluCollapse,
            "g-collapse-item": GuluCollapseItem,
        },
        data() {
            return {
                selectedArray: ["1"],
                selectedTab: "women",
                content: `
<g-button @click="showTop">top</g-button>
<g-button @click="showMiddle">middle</g-button>
<g-button @click="showBottom">bottom</g-button>`.replace(/^ {11}/gm, "").trim()
            };
        },
        methods: {
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

    .g-collapse {
        border: none;
        margin: 20px auto;
    }

    .g-collapse-item > .g-collapse-title {
        display: inline-block;
    }
</style>