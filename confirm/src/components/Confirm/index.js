import Confirm from './Confirm.vue'

Confirm.install = (Vue) => {
    const ConfirmCom = Vue.extend(Confirm)
    Vue.confirm = Vue.prototype.$confirm = ({data, success, cancel}) => {
        let defaultData = {
            title: 'Confirm',
            msg: 'Do you want to do this?',
            ok: 'OK',
            cancel: 'Cancel',
            bgColor: '#000'
        }
        if(data) {
            Object.keys(data).forEach(item => {
                defaultData[item] = data[item];
            })
        }
        let confirm = new ConfirmCom({
            data: defaultData,
            methods: {
                confirmSuccess() {
                    success()
                    this.hide()
                },
                confirmCancel() {
                    cancel()
                    this.hide()
                },
                hide() {
                    this.$el.remove();
                }
            }
        });
        document.body.appendChild(confirm.$mount().$el);
    }
}

export default Confirm