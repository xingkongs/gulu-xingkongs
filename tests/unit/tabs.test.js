const expect = chai.expect
import Vue from 'vue'

Vue.config.devtools = false
Vue.config.productionTip = false

import Tabs from '../../src/tabs/gulu-tabs'
import TabsHead from '../../src/tabs/gulu-tabs-head'
import TabsBody from '../../src/tabs/gulu-tabs-body'
import TabsItem from '../../src/tabs/gulu-tabs-item'
import TabsPane from '../../src/tabs/gulu-tabs-pane'

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

describe('tabs',()=>{
    it('tabs 存在',()=>{
        expect(Tabs).to.exist
    })
    it('接受selected 属性',(done)=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="women">
                <g-tabs-head>
                    <g-tabs-item name="women">美女</g-tabs-item>
                    <g-tabs-item name="finance">财经</g-tabs-item>
                    <g-tabs-item name="sports">体育</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                    <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
                    <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
                </g-tabs-body>
        </g-tabs>
        `
        let vm = new Vue({
            el:div
        })
        vm.$nextTick(()=>{
            var item = vm.$el.querySelector('.g-tabs-item[data-name=women]')
            expect(item.classList.contains('active')).to.eq(true)
            div.remove()
            vm.$el.remove()
            vm.$destroy()
            done()
        })
    })

})