import chai, {expect} from 'chai';
import {shallowMount, mount} from '@vue/test-utils';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Vue from 'vue';
chai.use(sinonChai);
import Input from '../../src/gulu-input';

Vue.config.devtools = false;
Vue.config.productionTip = false;

describe('input', () => {
    it('Input 存在', () => {
        expect(Input).to.exist;
    });
    describe('props', () => {
        const Constructor = Vue.extend(Input);
        it('接收value', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '张三'
                }
            });
            const inputElement = wrapper.find('input').element;
            expect(inputElement.value).to.eq('张三');
        });
        it('接收disabled值', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            });
            const inputElement = wrapper.find('input').element;
            expect(inputElement.disabled).to.eq(true);
        });
        it('接收readonly', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: "赵四",
                    readonly: true
                }
            });
            const inputElement = wrapper.find('input').element;
            expect(inputElement.readOnly).to.eq(true);
        });
        it('接收 error', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: "请输入3-4个字符"
                }
            });
            const InputElement = wrapper.vm.$el;
            expect(InputElement.classList.contains('error')).to.be.ok;
            const use = wrapper.find('use');
            const href = use.attributes()['href'];
            expect(href).to.eq("#i-error");
            const des = wrapper.find('.error_message').element;
            expect(des.textContent).to.eq("请输入3-4个字符");
        });
    });
    describe('事件监听', () => {
        const Constructor = Vue.extend(Input);
        it("支持 input change focus blur 事件", () => {
            ['input', 'change', 'focus', 'blur']
                .forEach(eventName => {
                    const callback = sinon.fake();
                    const Input = new Constructor({}).$mount();
                    Input.$on(eventName, callback);

                    //触发的event 里 传值
                    let event = new Event(eventName);
                    Object.defineProperty(event, 'target', {
                        value: {
                            value: '王五'
                        },
                        enumerable: true
                    });
                    let InputElement = Input.$el.querySelector('input');
                    InputElement.dispatchEvent(event);
                    expect(callback).to.have.been.calledWith("王五");

                });
        });
    });
});