const expect = chai.expect
import Vue from 'vue'
import Button from '../src/gulu-button'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('button',()=>{
    it('存在 button',()=>{
        expect(Button).to.be.ok
    })
    it('可以设置icon',()=>{
        const constructor = Vue.extend(Button)
        const button =new constructor({
            propsData:{
                icon:'settings'
            }
        }).$mount()
        const useElement = button.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq("#i-settings")
        button.$destroy()
    })
    it('可以设置 loading',()=>{
        const constructor = Vue.extend(Button)
        const button  = new constructor({
            propsData:{
                icon:'settings',
                loading:true
            }
        }).$mount()
        const useElement = button.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        button.$destroy()
    })
    it('icon 默认order 是1',()=>{
        const div= document.createElement('div')
        document.body.appendChild(div)
        const constructor = Vue.extend(Button)
        const button = new constructor({
            propsData:{
                icon:'settings'
            }
        }).$mount(div)
        const svg = button.$el.querySelector('svg')
        const {order} = window.getComputedStyle(svg)
        expect(order).to.eq("1")
        button.$el.remove()
        button.$destroy()
    })
    it('设置 iconPosition 可以改变 order',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const constructor = Vue.extend(Button)
        const button = new constructor({
            propsData:{
                icon:'setting',
                iconPosition:'right'
            }
        }).$mount(div)
        const svg = button.$el.querySelector('svg')
        const {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        button.$el.remove()
        button.$destroy()
    })
    it('点击button 触发 click 事件',()=>{
        const construcutor = Vue.extend(Button)
        const gButton = new construcutor({
            propsData:{
                icon:'settings'
            }
        }).$mount()
        const callback = sinon.fake()
        const button = gButton.$el
        gButton.$on('click',callback)
        button.click()
        expect(callback).to.have.been.called
        //注意 这里不是called()
    })
})
