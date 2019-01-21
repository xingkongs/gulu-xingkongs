const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/collapse/collapse'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('Collapse',()=>{
    it('手风琴 collapse 存在',()=>{
        expect(Collapse).to.exist
    })
    describe('props',()=>{
        it('接受 selected属性',()=>{

        })
        it('接受 single 属性',()=>{

        })
    })
})