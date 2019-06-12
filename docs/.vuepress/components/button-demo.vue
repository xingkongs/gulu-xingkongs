<template>
    <div>
        <div class="box">
            <h3>例1</h3>
            <g-button>按钮</g-button>
            <g-button :loading="loading2" icon="settings" @click="loading2 = !loading2">设置</g-button>
            <g-button :loading="loading3" icon="settings" icon-position="right" @click="loading3 = !loading3">设置</g-button>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(0)">源码</span>
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
                <span class="toggleSpan" @click="toggle(1)">源码</span>
                <template v-if="preVisible[1]">
                    <pre><code>{{content2.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../../../src/gulu-button";
    import ButtonGroup from "../../../src/button-group";
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
    .box {
        padding: 20px 20px;
        margin: 20px 0;
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