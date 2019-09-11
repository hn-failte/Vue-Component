import Popup from './Popup.vue'

const defaultData = {
    status: false,
    title: 'Popup',
    msg: 'Message'
}

Popup.install = (Vue) => {
    let PopupCom = Vue.extend(Popup)
    console.log('PopupCom', PopupCom)
    Vue.prototype.$popup = function(params) {
        let popup = new PopupCom({
            el: document.createElement('div'),
            data() {
                for(let item in params){
                    defaultData[item] = params[item]
                }
                return defaultData
            },
            methods: {
                hidePopup() {
                    this.status = false;
                },
            },
        })
        console.log('popup', popup);
        console.log('popup.$mount()', popup.$mount());
        document.body.appendChild(popup.$mount().$el)
    }
}

export default Popup