const expect = chai.expect
import Vue from 'vue'
import CollapseItem from '../src/collapse/collapseItem'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('CollapseItem',()=>{
    it('collapseItem 存在',()=>{
        expect(CollapseItem).to.exist
    })
})