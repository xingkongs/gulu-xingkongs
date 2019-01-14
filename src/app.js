import Vue from 'vue'
import Button from './gulu-button'
import Icon from './gulu-icon'
import ButtonGroup from './button-group'
import ButtonInput from './gulu-input'
import GuluRow from './grid/gulu-row'
import GuluCol from './grid/gulu-col'
import Gululayout from './layout/layout'
import Guluheader from './layout/header'
import Gulucontent from './layout/content'
import Gulufooter from './layout/footer'
import Gulusider from './layout/sider'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',ButtonInput)
Vue.component('g-row',GuluRow)
Vue.component('g-col',GuluCol)
Vue.component('g-layout',Gululayout)
Vue.component('g-header',Guluheader)
Vue.component('g-content',Gulucontent)
Vue.component('g-footer',Gulufooter)
Vue.component('g-sider',Gulusider)

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message:"xxx"

    },
    methods: {
        inputChange(e){
            console.log(e)
        }
    }
})