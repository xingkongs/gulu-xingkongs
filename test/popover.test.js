const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/gulu-popover'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('Popover', () => {
    it('Popover 存在', () => {
        expect(Popover).to.exist
    })
    describe('props', (done) => {
        xit('接受 position 属性', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-popover position="bottom" ref="pop">
                <template slot="content">popover</template>
                <button>点我</button>
            </g-popover>
            `
        })
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            console.log(vm.$refs);
            done()
        })
        it('接受 trigger 属性', () => {

        })
    })
})