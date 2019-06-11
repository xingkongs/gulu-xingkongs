let clickDocument = (e) => {
    let {target} = e;
    callbacks.map((item) => {
        if (target === item.el || item.el.contains(target)) {
        } else {
            item.callback();
        }
    });
};
document.addEventListener("click", clickDocument);
let callbacks = [];
export default {
    bind: function (el, binding) {
        callbacks.push({el, callback: binding.value});
    }
};
export let removeListener = () => {
    document.removeEventListener("click", clickDocument);
};