<template>
    <div>
        <div class="box">
            <h3>例1</h3>
            <g-row align="left">
                <g-col span="2">
                    <div class="col_wrapper">2</div>
                </g-col>
                <g-col span="2">
                    <div class="col_wrapper">2</div>
                </g-col>
                <g-col span="2">
                    <div class="col_wrapper">2</div>
                </g-col>
                <g-col class="reset" span="18">
                    <div class="col_wrapper">75%</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(0)">< ></span>
                <template v-if="preVisible[0]">
                    <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例2</h3>
            <g-row align="right">
                <g-col class="reset" span="12">
                    <div class="col_wrapper">50%</div>
                </g-col>
                <g-col span="4">
                    <div class="col_wrapper">4</div>
                </g-col>
                <g-col span="4">
                    <div class="col_wrapper">4</div>
                </g-col>
                <g-col span="4">
                    <div class="col_wrapper">4</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(1)">< ></span>
                <template v-if="preVisible[1]">
                    <pre><code>{{content2.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例3</h3>
            <g-row>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(2)">< ></span>
                <template v-if="preVisible[2]">
                    <pre><code>{{content3.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例4</h3>
            <g-row>
                <g-col span="1">
                    <div class="col_wrapper">1</div>
                </g-col>
                <g-col span="22" offset="1">
                    <div class="col_wrapper">22</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(3)">< ></span>
                <template v-if="preVisible[3]">
                    <pre><code>{{content4.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例5</h3>
            <g-row>
                <g-col span="8">
                    <div class="col_wrapper">8</div>
                </g-col>
                <g-col span="6" offset="2">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="8">
                    <div class="col_wrapper">8</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(4)">< ></span>
                <template v-if="preVisible[4]">
                    <pre><code>{{content5.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例6</h3>
            <g-row>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="3" offset="2">
                    <div class="col_wrapper">3</div>
                </g-col>
                <g-col span="6" offset="1">
                    <div class="col_wrapper">6</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(5)">< ></span>
                <template v-if="preVisible[5]">
                    <pre><code>{{content6.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例7</h3>
            <g-row gutter="20">
                <g-col span="12">
                    <div class="col_wrapper">12</div>
                </g-col>
                <g-col span="12">
                    <div class="col_wrapper">12</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(6)">< ></span>
                <template v-if="preVisible[6]">
                    <pre><code>{{content7.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例8</h3>
            <g-row gutter="20">
                <g-col span="8">
                    <div class="col_wrapper">8</div>
                </g-col>
                <g-col span="8">
                    <div class="col_wrapper">8</div>
                </g-col>
                <g-col span="8">
                    <div class="col_wrapper">8</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(7)">< ></span>
                <template v-if="preVisible[7]">
                    <pre><code>{{content8.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例9</h3>
            <g-row gutter="20">
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
                <g-col span="6">
                    <div class="col_wrapper">6</div>
                </g-col>
            </g-row>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(8)">< ></span>
                <template v-if="preVisible[8]">
                    <pre><code>{{content9.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import GuluRow from "../../../src/grid/gulu-row";
    import GuluCol from "../../../src/grid/gulu-col";
    export default {
        name: "grid-demo",
        components: {
            "g-row": GuluRow,
            "g-col": GuluCol,
        },
        data() {
            return {
                preVisible: [false, false, false, false, false, false, false, false, false],
                selectedArray: [],
                content1: `
<g-row align="left">
    <g-col span="2">
        <div class="col_wrapper">2</div>
    </g-col>
    <g-col span="2">
        <div class="col_wrapper">2</div>
    </g-col>
    <g-col span="2">
        <div class="col_wrapper">2</div>
    </g-col>
    <g-col class="reset" span="18">
        <div class="col_wrapper">75%</div>
    </g-col>
</g-row>
`,
                content2: `
<g-row align="right">
    <g-col class="reset" span="12">
        <div class="col_wrapper">50%</div>
    </g-col>
    <g-col span="4">
        <div class="col_wrapper">4</div>
    </g-col>
    <g-col span="4">
        <div class="col_wrapper">4</div>
    </g-col>
    <g-col span="4">
        <div class="col_wrapper">4</div>
    </g-col>
</g-row>
`,
                content3: `
<g-row>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
</g-row>`,
                content4: `
<g-row>
    <g-col span="1">
        <div class="col_wrapper">1</div>
    </g-col>
    <g-col span="22" offset="1">
        <div class="col_wrapper">22</div>
    </g-col>
</g-row>
`,
                content5: `
<g-row>
    <g-col span="8">
        <div class="col_wrapper">8</div>
    </g-col>
    <g-col span="6" offset="2">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="8">
        <div class="col_wrapper">8</div>
    </g-col>
</g-row>
`,
                content6: `
<g-row>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="3" offset="2">
        <div class="col_wrapper">3</div>
    </g-col>
    <g-col span="6" offset="1">
        <div class="col_wrapper">6</div>
    </g-col>
</g-row>
`,
                content7: `
<g-row gutter="20">
    <g-col span="12">
        <div class="col_wrapper">12</div>
    </g-col>
    <g-col span="12">
        <div class="col_wrapper">12</div>
    </g-col>
</g-row>
`,
                content8: `
<g-row gutter="20">
    <g-col span="8">
        <div class="col_wrapper">8</div>
    </g-col>
    <g-col span="8">
        <div class="col_wrapper">8</div>
    </g-col>
    <g-col span="8">
        <div class="col_wrapper">8</div>
    </g-col>
</g-row>
`,
                content9: `
<g-row gutter="20">
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
    <g-col span="6">
        <div class="col_wrapper">6</div>
    </g-col>
</g-row>
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
    .row {
        margin: 10px auto;
        outline: 1px solid #f0f0f0;
        .col:nth-of-type(odd) {
            background: #eddefb;
        }
        .col:nth-of-type(even) {
            background: #d4b2f4;
        }
        .col.reset {
            background: #fff;
        }
    }
    .col_wrapper, .reset {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .reset {
        height: 100px;
    }
</style>