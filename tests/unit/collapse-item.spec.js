import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
chai.use(sinonChai)
import CollapseItem from '../../src/collapse/collapseItem'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('CollapseItem',()=>{
    it('collapseItem 存在',()=>{
        expect(CollapseItem).to.exist
    })
})