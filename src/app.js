import Vue from 'vue'
import Button from './gulu-button'
import Icon from './gulu-icon'
import ButtonGroup from './button-group'
import ButtonInput from './gulu-input'
import GuluRow from './grid/gulu-row'
import GuluCol from './grid/gulu-col'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',ButtonInput)
Vue.component('g-row',GuluRow)
Vue.component('g-col',GuluCol)

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