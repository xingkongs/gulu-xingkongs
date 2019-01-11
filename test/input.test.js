import Vue from 'vue'
const expect = chai.expect
import Input from '../src/gulu-input'

Vue.config.devtools = false
Vue.config.productionTip = false

describe('input',()=>{
    it('Input 存在',()=>{
        expect(Input).to.exist
    })
    describe('props',()=>{
        const Constructor = Vue.extend(Input)
        it('接收value',()=>{
            const Input = new Constructor({
                propsData:{
                    value:'张三'
                }
            }).$mount()
            const inputElement = Input.$el.querySelector('input')
            expect(inputElement.value).to.eq('张三')
            Input.$destroy()
        })
        it('接收disabled值',()=>{
            const Input = new Constructor({
                propsData: {
                    disabled:true
                }
            }).$mount()
            const inputElement = Input.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)
            Input.$destroy()
        })
        it('接收readonly',()=>{
            const Input = new Constructor({
                propsData:{
                    value:"赵四",
                    readonly:true
                }
            }).$mount()
            const inputElement = Input.$el.querySelector('input')
            expect(inputElement.readOnly).to.eq(true)
            Input.$destroy()
        })
        it('接收 error',()=>{
            const Input = new Constructor({
                propsData:{
                    error:"请输入3-4个字符"
                }
            }).$mount()
            const InputElement = Input.$el
            expect(InputElement.classList.contains('error')).to.be.ok;
            const use = InputElement.querySelector('use')
            const href = use.getAttribute('xlink:href')
            expect(href).to.eq("#i-error")
            const des = InputElement.querySelector('.error_message')
            expect(des.textContent).to.eq("请输入3-4个字符")
            Input.$destroy()
        })
    })
    describe('事件监听',()=>{
        const Constructor = Vue.extend(Input)
        it("支持 input change focus blur 事件",()=>{
            ['input','change','focus','blur']
                .forEach(eventName=>{
                    const callback = sinon.fake()
                    const Input = new Constructor({}).$mount()
                    Input.$on(eventName,callback)

                    //触发的event 里 传值
                    let event = new Event(eventName)
                    Object.defineProperty(event,'target',{
                        value:{
                            value:'王五'
                        },
                        enumerable:true
                    })
                    let InputElement = Input.$el.querySelector('input')
                    InputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith("王五")

                })
        })
    })
})