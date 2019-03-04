const expect = chai.expect
import Vue from 'vue'
import TabsHead from '../src/tabs/gulu-tabs-head'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('TabsHead',()=>{
    it('tabs-head 存在',()=>{
        expect(TabsHead).to.exist
    })
})