<template>
    <div>
        <div class="box">
            <h3>例1</h3>
            <g-popover position="bottom">
                <template slot="content"><p>标题</p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover>
                <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover position="left">
                <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover position="right">
                <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(0)">< ></span>
                <template v-if="preVisible[0]">
                    <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                    <pre><code>{{content.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例2 hover</h3>
            <g-popover position="bottom" trigger="hover">
                <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover trigger="hover">
                <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover position="left" trigger="hover">
                <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
            <g-popover position="right" trigger="hover">
                <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
                <g-button>点我</g-button>
            </g-popover>
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
    import GuluPopover from "../../../src/gulu-popover";
    import Button from "../../../src/button/gulu-button";
    export default {
        name: "button-demo",
        components: {
            "g-button": Button,
            "g-popover": GuluPopover
        },
        data() {
            return {
                preVisible: [false, false],
                loading1: false,
                loading2: false,
                loading3: false,
                selectedArray: [],
                content1: `
<g-popover position="bottom">
    <template slot="content"><p>标题</p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>
<g-popover>
    <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="left">
    <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="right">
    <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>`,
                content2: `
                <g-button-group>
<g-popover position="bottom" trigger="hover">
    <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>
<g-popover trigger="hover">
    <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="left" trigger="hover">
    <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>
<g-popover position="right" trigger="hover">
    <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
    <g-button>点我</g-button>
</g-popover>`,
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