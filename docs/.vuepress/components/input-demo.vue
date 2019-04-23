<template>
    <div>
        <div class="box">
            <g-input value="张三"></g-input>
            <g-input value="李四" error="姓名不能为空"></g-input>
        </div>
        <div class="box">
            <g-input value="输入监听" @input="inputChange"></g-input>
        </div>
        <div class="box">
            <g-input v-model="message"></g-input>
            <button @click="message+=1">+1</button>
            <span>{{message}}</span>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/gulu-input'
    export default {
        name: "input-demo",
        components: {
            'g-input': Input,
        },
        data() {
            return {
                loading1: false,
                loading2: false,
                loading3: false,
                message:"xxx",
                content: `
                <div class="box">
                    <g-input value="张三"></g-input>
                    <g-input value="李四" error="姓名不能为空"></g-input>
                </div>
                <div class="box">
                    <g-input value="输入监听" @input="inputChange"></g-input>
                </div>
                <div class="box">
                    <g-input v-model="message"></g-input>
                    <p>{{message}}</p>
                    <button @click="message+=1">+1</button>
                </div>`.replace(/^ {11}/gm, '').trim()
            }
        },
        methods: {
            inputChange(e){
                console.log(e)
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .box {
        margin: 20px;
        overflow: hidden;
        padding:2px;
    }
</style>