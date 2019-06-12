<template>
    <div class="box">
        <g-cascader :source.sync="source" height="200px"
                :selected.sync="selected"
                :loadData="loadData"></g-cascader>
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
    import GuluCascader from "../../../src/cascader/gulu-cascader";
    import db from "../../../src/db";
    import {removeListener} from "../../../src/click-outside";
    function ajax(parent_id = 0) {
        return new Promise((resolve, reject) => {
            let result = db.filter(item => item.parent_id === parent_id);
            result.map(node => {
                node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
            });
            setTimeout(() => {
                resolve(result);
            }, 2000);
        });
    }
    export default {
        name: "Cascader-demo",
        components: {
            "g-cascader": GuluCascader,
        },
        data() {
            return {
                source: [],
                selected: [],
                preVisible: [false],
                content1: `
                <g-cascader :source.sync="source" height="200px"
                :selected.sync="selected"
                :loadData="loadData"></g-cascader>
                `,
                content:`
                function ajax(parent_id = 0) {
                    return new Promise((resolve, reject) => {
                        let result = db.filter(item => item.parent_id === parent_id);
                        result.map(node => {
                            node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
                        });
                        setTimeout(() => {
                            resolve(result);
                        }, 2000);
                    });
                }
                ajax(0).then((result) => {
                    this.source = result;
                });
                //data
                source: [],
                selected: [],
                //methods
                loadData({id}, fn) {
                    ajax(id).then((result) => {
                        fn(result);
                    });
                }
                `
            };
        },
        created() {
            // ajax1(0, (result) => {
            //     this.source = result;
            // });
            ajax(0).then((result) => {
                this.source = result;
            });
        },
        destroyed() {
            removeListener();
        },
        methods: {
            toggle(index) {
                this.preVisible.splice(index, 1, !this.preVisible[index]);
            },
            loadData({id}, fn) {
                ajax(id).then((result) => {
                    fn(result);
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
        padding: 20px 20px;
        margin: 20px 0;
        border: 1px solid #f0f0f0;
        min-height: 50vh;
    }
    h3 {
        margin-bottom: 20px;
    }
    .g-collapse {
        border: none;
        margin: 20px auto;
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