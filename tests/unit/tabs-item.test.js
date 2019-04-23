const expect = chai.expect
import Vue from 'vue'
import TabsItem from '../../src/tabs/gulu-tabs-item'


Vue.config.devtools = false
Vue.config.productionTip = false

describe('tabs-item',()=>{
    it('tabs-item 存在',()=>{
        expect(TabsItem).to.exist
    })
    it('接受 name 属性',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                name:'sports'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq("sports")
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 disabled 属性 为true',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                name:'sport',
                disabled:true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.eq(true)
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$el.click();
        expect(callback).to.not.have.been.called;
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 disabled 属性 为false',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                name:'sport',
                disabled:false
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.eq(false)
        const callback = sinon.fake()
        vm.$on('click',callback);
        vm.$el.click();
        expect(callback).to.have.been.called;
        vm.$el.remove()
        vm.$destroy()
    })
})