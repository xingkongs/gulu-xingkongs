<template>
    <div class="box">
        <g-button @click="showTop">top</g-button>
        <g-button @click="showMiddle">middle</g-button>
        <g-button @click="showBottom">bottom</g-button>
        <div class="toggerWrapper">
            <span class="toggleSpan" @click="toggle(0)">源码</span>
            <template v-if="preVisible[0]">
                <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                <pre><code>{{content.replace(/^ {11}/gm, "").trim()}}</code></pre>
            </template>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import GuluButton from "../../../src/gulu-button";
    import plugin from "../../../src/plugin";
    Vue.use(plugin);
    export default {
        name: "toast-demo",
        components: {
            "g-button": GuluButton,
        },
        data() {
            return {
                selectedArray: ["1"],
                preVisible: [false],
                selectedTab: "women",
                content1: `
<g-button @click="showTop">top</g-button>
<g-button @click="showMiddle">middle</g-button>
<g-button @click="showBottom">bottom</g-button>`,
                content: `
import plugin from "plugin";
Vue.use(plugin);
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
    .toggerWrapper {
        margin: 20px auto;
        .toggleSpan {
            user-select: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            background: #f0f0f0;
            cursor: pointer;
            line-height: 1;
        }
    }
</style>