import Vue from 'vue'
import Button from './gulu-button'
import Icon from './gulu-icon'
import ButtonGroup from './button-group'
import ButtonInput from './gulu-input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',ButtonInput)

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