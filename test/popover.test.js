const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/gulu-popover'
Vue.component('g-popover',Popover)


Vue.config.devtools = false
Vue.config.productionTip = false

describe('Popover', () => {
    it('Popover 存在', () => {
        expect(Popover).to.exist
    })
    describe('props', () => {
        it('接受 position 属性', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-popover position="bottom" ref="pop">
                <template slot="content">popover</template>
                <button>点我</button>
            </g-popover>
            `
            let vm = new Vue({
                el: div
            })
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                let {contentWrapper} = vm.$refs.pop.$refs
                expect(contentWrapper.classList.contains('position-bottom')).to.eq(true)
                done()
            })
        })

        it('接受 trigger 属性', () => {

        })
    })
})