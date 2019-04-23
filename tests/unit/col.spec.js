import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
chai.use(sinonChai)
import Col from '../../src/grid/gulu-col'

describe('Col',()=>{
    it('Col 存在',()=>{
        expect(Col).to.exist
    })
    it('接收 span 属性',()=>{
        const wrapper = mount(Col,{
            propsData:{
                span:'1'
            }
        })
        const vm = wrapper.vm
        const col = vm.$el
       expect(col.classList.contains('col-1')).to.eq(true)
    })
    it('接收 offset 属性',()=>{
        const wrapper = mount(Col,{
            propsData:{
                offset:1
            }
        })
        const vm = wrapper.vm
        const col = vm.$el
        expect(col.classList.contains('offset-1')).to.eq(true)
    })
    it('接收 ipad 属性',()=>{
        const wrapper = mount(Col,{
            propsData:{
                ipad:{span:2,offset:3}
            }
        })
        const vm = wrapper.vm
        const col = vm.$el
        expect(col.classList.contains('col-ipad-2')).to.eq(true)
        expect(col.classList.contains('offset-ipad-3')).to.eq(true)
    })
    it('接收 narrowPc 属性',()=>{
        const wrapper = mount(Col,{
            propsData:{
                narrowPc:{span:1,offset:2}
            }
        })
        const vm = wrapper.vm
        const col = vm.$el
        expect(col.classList.contains('col-narrow-pc-1')).to.eq(true)
        expect(col.classList.contains('offset-narrow-pc-2')).to.eq(true)
    })
    it('接收 pc 属性',()=>{
        const wrapper = mount(Col,{
            propsData:{
                pc:{span:1,offset:2}
            }
        })
        const vm = wrapper.vm
        const col = vm.$el
        expect(col.classList.contains('col-pc-1')).to.eq(true)
        expect(col.classList.contains('offset-pc-2')).to.eq(true)
    })
    it('接收 widePc 属性',()=>{
        const wrapper = mount(Col,{
            propsData:{
                widePc:{span:4,offset:5}
            }
        })
        const vm = wrapper.vm
        const col = vm.$el
        expect(col.classList.contains('col-wide-pc-4')).to.eq(true)
        expect(col.classList.contains('offset-wide-pc-5')).to.eq(true)
    })
})