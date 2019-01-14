const expect  = chai.expect
import Vue from 'vue'
import Row from '../src/grid/gulu-row'
import Col from '../src/grid/gulu-col'

describe('Row',()=>{
    it('row 存在',()=>{
        expect(Row).to.exist
    })
    it('支持 gutter',(done)=>{
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
            <g-row gutter="20">
                <g-col span="12">1</g-col>
                <g-col span="12">2</g-col>
            </g-row>
        `
        let vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            let row  = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            let col = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(col[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(col[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(col[1]).paddingRight).to.eq('10px')
            expect(getComputedStyle(col[1]).paddingLeft).to.eq('10px')
            done()
        })
        div.remove()
    })
    it('支持 align 属性',()=>{
        const div =  document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                align:'left'
            }
        }).$mount(div)
        let row = vm.$el
        expect(getComputedStyle(row).justifyContent).to.eq('flex-start');
    })
})