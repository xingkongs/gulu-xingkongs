const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs/gulu-tabs'
import TabsHead from '../src/tabs/gulu-tabs-head'
import TabsBody from '../src/tabs/gulu-tabs-body'
import TabsItem from '../src/tabs/gulu-tabs-item'
import TabsPane from '../src/tabs/gulu-tabs-pane'

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)


Vue.config.devtools = false
Vue.config.productionTip = false

describe('tabs-pane',()=>{
    it('tabs-pane 存在',()=>{
        expect(TabsPane).to.exist
    })
    it('接受 name 属性',(done)=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
            <g-tabs selected="women">
                <g-tabs-head>
                    <g-tabs-item name="women">美女</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="women">美女相关资讯</g-tabs-pane>
                </g-tabs-body>
        </g-tabs>
        `
        let vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            const tabsPane = vm.$el.querySelector('.g-tabs-pane')
            expect(tabsPane.getAttribute('data-name')).to.eq('women')
          done()
        },1000)

    })
})