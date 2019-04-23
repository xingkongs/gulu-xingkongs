import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
chai.use(sinonChai)
import Collapse from '../../src/collapse/collapse'


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