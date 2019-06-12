import chai, {expect} from "chai";
import {shallowMount, mount} from "@vue/test-utils";
import sinonChai from "sinon-chai";
import Vue from "vue";
chai.use(sinonChai);
import Popover from "../../src/gulu-popover";
Vue.component("g-popover", Popover);
Vue.config.devtools = false;
Vue.config.productionTip = false;
describe("Popover", () => {
    it("Popover 存在", () => {
        expect(Popover).to.exist;
    });
    describe("props", () => {
        it("接受 position 属性", (done) => {
            const wrapper = mount(Popover, {
                propsData: {
                    position: "bottom"
                },
                slots: {
                    default: "<button>点我</button>",
                    content: "popover",
                }
            });
            const button = wrapper.find("button");
            button.trigger("click");
            wrapper.vm.$nextTick(() => {
                let contentWrapper = wrapper.find({ref: "contentWrapper"});
                expect(contentWrapper.element.classList.contains("position-bottom")).to.eq(true);
                button.trigger("click");//销毁 contentWrapper
                done();
            });
        });
        it("接受 trigger 属性", (done) => {
            const wrapper = mount(Popover, {
                propsData: {
                    trigger: "hover"
                },
                slots: {
                    default: "<button>点我</button>",
                    content: "popover",
                }
            });
            let contentWrapper = wrapper.find(".content--wrapper").element;
            expect(contentWrapper).to.not.exist;
            wrapper.find({ref: "popover"}).trigger("mouseenter");
            wrapper.vm.$nextTick(() => {
                let contentWrapper = document.body.querySelector(".content--wrapper");
                //console.log(contentWrapper.outerHTML);
                expect(contentWrapper.classList.contains("position-top")).to.eq(true);
                done();
            });
        });
    });
});