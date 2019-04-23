<template>
    <div>
        <div class="box">
            <g-row align="left">
                <g-col span="1"><div class="col_wrapper">左1</div></g-col>
                <g-col span="2"><div class="col_wrapper">左2</div></g-col>
                <g-col span="3"><div class="col_wrapper">左3</div></g-col>
            </g-row>
            <g-row align="right">
                <g-col span="1"><div class="col_wrapper">右1</div></g-col>
                <g-col span="8"><div class="col_wrapper">右2</div></g-col>
                <g-col span="8"><div class="col_wrapper">右3</div></g-col>
            </g-row>
            <g-row>
                <g-col span="6"><div class="col_wrapper">1</div></g-col>
                <g-col span="6"><div class="col_wrapper">2</div></g-col>
                <g-col span="6"><div class="col_wrapper">3</div></g-col>
                <g-col span="6"><div class="col_wrapper">4</div></g-col>
            </g-row>
            <g-row>
                <g-col span="1"><div class="col_wrapper">1</div></g-col>
                <g-col span="22" offset="1"><div class="col_wrapper">2</div></g-col>
            </g-row>
            <g-row>
                <g-col span="8"><div class="col_wrapper">1</div></g-col>
                <g-col span="6" offset="2"><div class="col_wrapper">2</div></g-col>
                <g-col span="8"><div class="col_wrapper">3</div></g-col>
            </g-row>
            <g-row>
                <g-col span="6"><div class="col_wrapper">1</div></g-col>
                <g-col span="6"><div class="col_wrapper">2</div></g-col>
                <g-col span="3" offset="2"><div class="col_wrapper">3</div></g-col>
                <g-col span="6" offset="1"><div class="col_wrapper">4</div></g-col>
            </g-row>
            <g-row gutter="20">
                <g-col span="12"><div class="col_wrapper">1</div></g-col>
                <g-col span="12"><div class="col_wrapper">2</div></g-col>
            </g-row>
            <g-row gutter="20">
                <g-col span="8"><div class="col_wrapper">1</div></g-col>
                <g-col span="8"><div class="col_wrapper">2</div></g-col>
                <g-col span="8"><div class="col_wrapper">3</div></g-col>
            </g-row>
            <g-row gutter="20">
                <g-col span="6"><div class="col_wrapper">1</div></g-col>
                <g-col span="6"><div class="col_wrapper">2</div></g-col>
                <g-col span="6"><div class="col_wrapper">3</div></g-col>
                <g-col span="6"><div class="col_wrapper">4</div></g-col>
            </g-row>
        </div>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import GuluRow from '../../../src/grid/gulu-row'
    import GuluCol from '../../../src/grid/gulu-col'

    export default {
        name: "grid-demo",
        components: {
            'g-row': GuluRow,
            'g-col': GuluCol,
        },
        data() {
            return {
                content: `
<g-row align="left">
    <g-col span="1"><div class="col_wrapper">左1</div></g-col>
    <g-col span="2"><div class="col_wrapper">左2</div></g-col>
    <g-col span="3"><div class="col_wrapper">左3</div></g-col>
</g-row>
<g-row align="right">
    <g-col span="1"><div class="col_wrapper">右1</div></g-col>
    <g-col span="8"><div class="col_wrapper">右2</div></g-col>
    <g-col span="8"><div class="col_wrapper">右3</div></g-col>
</g-row>
<g-row>
    <g-col span="6"><div class="col_wrapper">1</div></g-col>
    <g-col span="6"><div class="col_wrapper">2</div></g-col>
    <g-col span="6"><div class="col_wrapper">3</div></g-col>
    <g-col span="6"><div class="col_wrapper">4</div></g-col>
</g-row>
<g-row>
    <g-col span="1"><div class="col_wrapper">1</div></g-col>
    <g-col span="22" offset="1"><div class="col_wrapper">2</div></g-col>
</g-row>
<g-row>
    <g-col span="8"><div class="col_wrapper">1</div></g-col>
    <g-col span="6" offset="2"><div class="col_wrapper">2</div></g-col>
    <g-col span="8"><div class="col_wrapper">3</div></g-col>
</g-row>
<g-row>
    <g-col span="6"><div class="col_wrapper">1</div></g-col>
    <g-col span="6"><div class="col_wrapper">2</div></g-col>
    <g-col span="3" offset="2"><div class="col_wrapper">3</div></g-col>
    <g-col span="6" offset="1"><div class="col_wrapper">4</div></g-col>
</g-row>
<g-row gutter="20">
    <g-col span="12"><div class="col_wrapper">1</div></g-col>
    <g-col span="12"><div class="col_wrapper">2</div></g-col>
</g-row>
<g-row gutter="20">
    <g-col span="8"><div class="col_wrapper">1</div></g-col>
    <g-col span="8"><div class="col_wrapper">2</div></g-col>
    <g-col span="8"><div class="col_wrapper">3</div></g-col>
</g-row>
<g-row gutter="20">
    <g-col span="6"><div class="col_wrapper">1</div></g-col>
    <g-col span="6"><div class="col_wrapper">2</div></g-col>
    <g-col span="6"><div class="col_wrapper">3</div></g-col>
    <g-col span="6"><div class="col_wrapper">4</div></g-col>
</g-row>`.replace(/^ {11}/gm, '').trim()
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
        overflow: hidden;
        padding:2px;
    }
    .row{
        margin:10px auto;

    }
    .col_wrapper{
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid #ccc;
        background: #f0f0f0;
    }
</style>