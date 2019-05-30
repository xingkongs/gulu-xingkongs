<template>
    <div class="box" id="app">
        <g-cascader :source="source" height="200px"
                :selected.sync="selected"></g-cascader>
    </div>
</template>

<script>
    import Vue from "vue";
    import Button from "./gulu-button";
    import Icon from "./gulu-icon";
    import ButtonGroup from "./button-group";
    import ButtonInput from "./gulu-input";
    import GuluRow from "./grid/gulu-row";
    import GuluCol from "./grid/gulu-col";
    import Gululayout from "./layout/layout";
    import Guluheader from "./layout/header";
    import Gulucontent from "./layout/content";
    import Gulufooter from "./layout/footer";
    import Gulusider from "./layout/sider";
    import GuluToast from "./gulu-toast";
    import plugin from "./plugin";
    import GuluTabs from "./tabs/gulu-tabs";
    import GuluTabsHead from "./tabs/gulu-tabs-head";
    import GuluTabsBody from "./tabs/gulu-tabs-body";
    import GuluTabsItem from "./tabs/gulu-tabs-item";
    import GuluTabsPane from "./tabs/gulu-tabs-pane";
    import GuluPopover from "./gulu-popover";
    import GuluCollapse from "./collapse/collapse";
    import GuluCollapseItem from "./collapse/collapseItem";
    import GuluCascader from "./cascader/gulu-cascader";
    import CascaderDemo from "./cascader/cascader-demo";
    Vue.component("g-button", Button);
    Vue.component("g-icon", Icon);
    Vue.component("g-button-group", ButtonGroup);
    Vue.component("g-input", ButtonInput);
    Vue.component("g-row", GuluRow);
    Vue.component("g-col", GuluCol);
    Vue.component("g-layout", Gululayout);
    Vue.component("g-header", Guluheader);
    Vue.component("g-content", Gulucontent);
    Vue.component("g-footer", Gulufooter);
    Vue.component("g-sider", Gulusider);
    Vue.component("g-toast", GuluToast);
    Vue.use(plugin);
    Vue.component("g-tabs", GuluTabs);
    Vue.component("g-tabs-head", GuluTabsHead);
    Vue.component("g-tabs-body", GuluTabsBody);
    Vue.component("g-tabs-item", GuluTabsItem);
    Vue.component("g-tabs-pane", GuluTabsPane);
    Vue.component("g-popover", GuluPopover);
    Vue.component("g-collapse", GuluCollapse);
    Vue.component("g-collapse-item", GuluCollapseItem);
    Vue.component("g-cascader", GuluCascader);
    Vue.component("g-cascader-demo", CascaderDemo);
    export default {
        name: "demo",
        data() {
            return {
                loading1: false,
                loading2: false,
                loading3: false,
                message: "xxx",
                selectedTab: ["2"],
                selected: [],
                source: [{
                    name: "浙江",
                    children: [
                        {
                            name: "杭州",
                            children: [
                                {name: "上城"},
                                {name: "下城"},
                                {name: "江干"},
                            ]
                        },
                        {
                            name: "嘉兴",
                            children: [
                                {name: "南湖"},
                                {name: "秀洲"},
                                {name: "嘉善"},
                            ]
                        },
                    ]
                }, {
                    name: "福建",
                    children: [
                        {
                            name: "福州",
                            children: [
                                {name: "鼓楼"},
                                {name: "台江"},
                                {name: "仓山"},
                            ]
                        },
                    ]
                }]
            };
        },
        methods: {
            yyy(message) {
                console.log(message);
            },
            inputChange(e) {
                console.log(e);
            },
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
                    autoClose: 2,
                    position
                });
            }
        }
    };
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .box {
        margin: 50px 200px 80px;
        padding: 2px;
    }
</style>