import Vue from 'vue'
import Button from './gulu-button'
import Icon from './gulu-icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,

    },
    methods: {}
})

import chai from 'chai'

const expect  = chai.expect

{
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
}
{
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
}
{
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
}
{
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
}
{
    const construcutor = Vue.extend(Button)
    const gButton = new construcutor({
        propsData:{
            icon:'settings'
        }
    }).$mount()
    const button = gButton.$el
    gButton.$on('click',function () {
        console.log(1)
    })
    button.click()
    gButton.$destroy()
}