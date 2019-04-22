import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import Button from '@/gulu-button.vue'
chai.use(sinonChai)

describe('button',()=>{
  it('存在 button',()=>{
    expect(Button).to.be.ok
  })
  it('可以设置icon',()=>{
    const wrapper = mount(Button,{
      propsData:{
        icon:'settings'
      }
    })
    const useElement = wrapper.find('use')
    const href = useElement.attributes()['href']
    expect(href).to.eq("#i-settings")
  })
  it('可以设置 loading',()=>{
    const wrapper = mount(Button,{
      propsData:{
        icon:'settings',
        loading:true
      }
    })
    const button = wrapper.vm;
    const useElement = button.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$destroy()
  })
  xit('icon 默认order 是1',()=>{
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
  xit('设置 iconPosition 可以改变 order',()=>{
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
    const gButton = mount(Button,{
      propsData:{
        icon:'settings'
      }
    });
    const callback = sinon.fake()
    const vm = gButton.vm
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.been.called
    //注意 这里不是called()
  })
})