import Popup from './Popup.vue'

const defaultPopup = {
    status: false,
    title: 'Popup',
    msg: 'Message'
}

Popup.install = (Vue) => {
    let PopupCom = Vue.extend(Popup)
    console.log('PopupCom', PopupCom)
    Vue.prototype.$popup = function(params) {
        if(Vue.prototype.existPopup) return;
        let popup = new PopupCom({
            el: document.createElement('div'),
            data() {
                return Object.assign(defaultPopup, params)
            },
            methods: {
                hidePopup() {
                    this.$refs.popup.remove();
                    Vue.prototype.existPopup = false;
                },
            },
            mounted() {
                setTimeout(() => {
                    this.$refs.popupBody.style.width = '600px';
                    this.$refs.popupBody.style.height = '300px';
                }, 0)
            },
        })
        Vue.prototype.existPopup = true;
        document.body.appendChild(popup.$mount().$el)
    }
}

export default Popup