import Toast from './gulu-toast'
let currentToast
export default {
    install(Vue) {
        Vue.prototype.$toast = function (message,toastOptions) {
            const Constructor = Vue.extend(Toast)
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({
                Constructor,
                propsData:toastOptions,
                message,
                onClose:()=>{
                    currentToast = null
                }
            })
        }
    }
}

function createToast({Constructor,propsData,message,onClose}){
    const toast = new Constructor({
        propsData:propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('beforeClose',onClose)
    document.body.appendChild(toast.$el)
    return toast
}