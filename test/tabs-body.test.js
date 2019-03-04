const expect = chai.expect
import Vue from 'vue'
import TabsBody from '../src/tabs/gulu-tabs-body'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('TabsBody',()=>{
    it('tabs-body 存在',()=>{
        expect(TabsBody).to.exist
    })
})