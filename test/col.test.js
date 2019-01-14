const expect = chai.expect
import Vue from 'vue'
import Col from '../src/grid/gulu-col'

describe('Col',()=>{
    it('Col 存在',()=>{
        expect(Col).to.exist
    })
    it('接收 span 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                span:'1'
            }
        }).$mount(div)
        const col = vm.$el
       expect(col.classList.contains('col-1')).to.eq(true)
    })
    it('接收 offset 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                offset:1
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('offset-1')).to.eq(true)
    })
    it('接收 ipad 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                ipad:{span:2,offset:3}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-ipad-2')).to.eq(true)
        expect(col.classList.contains('offset-ipad-3')).to.eq(true)
    })
    it('接收 narrowPc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                narrowPc:{span:1,offset:2}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-narrow-pc-1')).to.eq(true)
        expect(col.classList.contains('offset-narrow-pc-2')).to.eq(true)
    })
    it('接收 pc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                pc:{span:1,offset:2}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-pc-1')).to.eq(true)
        expect(col.classList.contains('offset-pc-2')).to.eq(true)
    })
    it('接收 widePc 属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                widePc:{span:4,offset:5}
            }
        }).$mount(div)
        const col = vm.$el
        expect(col.classList.contains('col-wide-pc-4')).to.eq(true)
        expect(col.classList.contains('offset-wide-pc-5')).to.eq(true)
    })
})