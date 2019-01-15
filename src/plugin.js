import Toast from './gulu-toast'
let currentToast
export default {
    install(Vue) {
        Vue.prototype.$toast = function (message,toastOptions) {
            const Constructor = Vue.extend(Toast)
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({Constructor,propsData:toastOptions,message})
        }
    }
}

function createToast({Constructor,propsData,message}){
    const toast = new Constructor({
        propsData:propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}