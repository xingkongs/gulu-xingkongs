<template>
    <div>
        <div class="box">
            <h3>例1</h3>
            <g-button>按钮</g-button>
            <g-button :loading="loading2" icon="settings" @click="loading2 = !loading2">设置</g-button>
            <g-button :loading="loading3" icon="settings" icon-position="right" @click="loading3 = !loading3">设置</g-button>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(0)">< ></span>
                <template v-if="preVisible[0]">
                    <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                    <pre><code>{{content.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例2</h3>
            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button>更多</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(1)">< ></span>
                <template v-if="preVisible[1]">
                    <pre><code>{{content2.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../../../src/button/gulu-button";
    import ButtonGroup from "../../../src/button/button-group";
    export default {
        name: "button-demo",
        components: {
            "g-button": Button,
            "g-button-group": ButtonGroup,
        },
        data() {
            return {
                preVisible: [false, false],
                loading1: false,
                loading2: false,
                loading3: false,
                selectedArray: [],
                content1: `
<g-button>按钮</g-button>
<g-button :loading="loading2" icon="settings"
    @click="loading2 = !loading2">
    设置
</g-button>
<g-button :loading="loading3" icon="settings"
    icon-position="right"
    @click="loading3 = !loading3">
    设置
</g-button>
                `,
                content2: `
<g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
                `,
                content: `
loading2: false,
loading3: false,
                `
            };
        },
        methods: {
            toggle(index) {
                this.preVisible.splice(index, 1, !this.preVisible[index]);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "./common";
</style>