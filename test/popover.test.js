const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/gulu-popover'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('Popover',()=> {
    it('Popover 存在', () => {
        expect(Popover).to.exist
    })
    describe('props',()=>{
        it('接受 position 属性',()=>{

        })
        it('接受 trigger 属性',()=>{
            
        })
    })
})