<template>
    <div class="box">
        <g-collapse class="example" single :selected.sync="selectedArray">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <g-collapse single :selected.sync="selectedArray">
            <g-collapse-item title="源码" name="5">
                <pre><code>{{content.replace(/^ {11}/gm, "").trim()}}</code></pre>
            </g-collapse-item>
        </g-collapse>
    </div>
</template>

<script>
    import GuluCollapse from "../../../src/collapse/collapse";
    import GuluCollapseItem from "../../../src/collapse/collapseItem";
    export default {
        name: "toast-demo",
        components: {
            "g-collapse": GuluCollapse,
            "g-collapse-item": GuluCollapseItem,
        },
        data() {
            return {
                selectedArray: ["2", "5"],
                content: `
<g-collapse single :selected.sync="selectedArray">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`
            };
        },
        methods: {
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

        &.example {
            border: 1px solid #f0f0f0;

            .g-content {
                padding: 24px 50px;
            }
        }

    }



</style>