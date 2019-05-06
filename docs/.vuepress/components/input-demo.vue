<template>
    <div>
        <div class="box">
            <h3>例1</h3>
            <g-input value="张三"></g-input>
            <g-input value="李四" error="姓名不能为空"></g-input>
            <g-collapse single :selected.sync="selectedArray">
                <g-collapse-item title="源码" name="1">
                    <pre><code>{{content1.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </g-collapse-item>
            </g-collapse>
        </div>
        <div class="box">
            <h3>例2</h3>
            <g-input value="输入监听" @input="inputChange"></g-input>
            <g-collapse single :selected.sync="selectedArray">
                <g-collapse-item title="源码" name="2">
                    <pre><code>{{content2.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </g-collapse-item>
            </g-collapse>
        </div>
        <div class="box">
            <h3>例3</h3>
            <g-input v-model="message"></g-input>
            <button @click="message+=1">+1</button>
            <span>{{message}}</span>
            <g-collapse single :selected.sync="selectedArray">
                <g-collapse-item title="源码" name="3">
                    <pre><code>{{content3.replace(/^ {11}/gm, "").trim()}}</code></pre>
                </g-collapse-item>
            </g-collapse>
        </div>
    </div>
</template>

<script>
    import Input from "../../../src/gulu-input";
    import GuluCollapse from "../../../src/collapse/collapse";
    import GuluCollapseItem from "../../../src/collapse/collapseItem";
    export default {
        name: "input-demo",
        components: {
            "g-input": Input,
            "g-collapse": GuluCollapse,
            "g-collapse-item": GuluCollapseItem,
        },
        data() {
            return {
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
                `
            };
        },
        methods: {
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

</style>