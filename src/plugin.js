import Toast from './gulu-toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message,toastOptions) {
            const Constructor = Vue.extend(Toast)
            const toast = new Constructor({
                propsData:{
                    closeButton: toastOptions.closeButton
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}