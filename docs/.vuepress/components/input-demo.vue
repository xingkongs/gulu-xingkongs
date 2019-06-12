<template>
    <div>
        <div class="box">
            <h3>例1</h3>
            <g-input value="张三"></g-input>
            <g-input value="李四" error="姓名不能为空"></g-input>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(0)">源码</span>
                <template v-if="preVisible[0]">
                    <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例2</h3>
            <g-input value="输入监听" @input="inputChange"></g-input>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(1)">源码</span>
                <template v-if="preVisible[1]">
                    <pre><code>{{content2.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
        <div class="box">
            <h3>例3</h3>
            <g-input v-model="message"></g-input>
            <button @click="message+=1">+1</button>
            <span>{{message}}</span>
            <div class="toggerWrapper">
                <span class="toggleSpan" @click="toggle(2)">源码</span>
                <template v-if="preVisible[2]">
                    <pre><code>{{content3.replace(/^ {11}/gm, "").trim()}}</code></pre>
                    <pre><code>{{content.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from "../../../src/gulu-input";
    export default {
        name: "input-demo",
        components: {
            "g-input": Input,
        },
        data() {
            return {
                preVisible: [false, false, false],
                loading1: false,
                loading2: false,
                loading3: false,
                message: "xxx",
                selectedArray: [],
                content1: `
<g-input value="张三"></g-input>
<g-input value="李四" error="姓名不能为空"></g-input>
                `,
                content2: `
<g-input value="输入监听" @input="inputChange"></g-input>
                `,
                content3: `
<g-input v-model="message"></g-input>
<p>{{message}}</p>
<button @click="message+=1">+1</button>
                `,
                content: `
message: "xxx",
                `
            };
        },
        methods: {
            toggle(index) {
                this.preVisible.splice(index, 1, !this.preVisible[index]);
            },
            inputChange(e) {
                console.log(e);
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