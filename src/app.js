import Vue from "vue";
import Button from "./button/gulu-button";
import Icon from "./gulu-icon";
import ButtonGroup from "./button/button-group";
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
import GNav from "./nav/nav";
import GNavItem from "./nav/nav-item";
import GSubNav from "./nav/sub-nav";
import db from "./db";
import {removeListener} from "./click-outside";
import slide from "./slide/slide";
import slideItem from "./slide/slide-item";
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
Vue.component("g-slide", slide);
Vue.component("g-slide-item", slideItem);
Vue.component("g-nav", GNav);
Vue.component("g-nav-item", GNavItem);
Vue.component("g-sub-nav", GSubNav);