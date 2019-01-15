const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/gulu-toast'

describe('Toast',()=>{
    it('toast存在',()=>{
        expect(Toast).to.exist
    })
    describe('props',()=>{
        it('支持 autoClose 属性',(done)=>{
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData:{
                    autoClose:1
                }
            }).$mount(div)
            setTimeout(()=>{
                expect(document.body.contains(toast.$el)).to.eq(false)
                done()
            },1000)
            toast.$el.remove()
            toast.$destroy()
        })
        it('接收 closeButton',()=>{
            const callback = sinon.fake()
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData:{
                    closeButton:{
                        text:"知道了",
                        callback
                    }
                }
            }).$mount(div)
            const closeElement = toast.$el.querySelector('.closeButton')
            expect(closeElement.textContent.trim()).to.eq("知道了")
            closeElement.click()
            expect(callback).to.have.been.called
            toast.$el.remove()
            toast.$destroy()
        })
        it('接收 enableHtml 属性',()=>{
            const callback = sinon.fake()
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData:{
                    enableHtml: true
                }
            })
            toast.$slots.default=[`<a href="" id="toast_a">link</a>`]
            toast.$mount()
            const aElement = toast.$el.querySelector('#toast_a')
            expect(aElement).to.exist
            toast.$el.remove()
            toast.$destroy()
        })
        it('接收 position 属性',()=>{
            const callback = sinon.fake()
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData:{
                    position: 'middle'
                }
            }).$mount()
            expect(toast.$el.classList.contains('position-middle')).to.eq(true)
            toast.$el.remove()
            toast.$destroy()
        })
    })
})