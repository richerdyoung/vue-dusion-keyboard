import VueDusionKeyboard from './VueDusionKeyboard'

const keyboard = {
    install(Vue, options) {
        Vue.component('VueDusionKeyboard', VueDusionKeyboard)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(keyboard);
}

export default keyboard