import Toast from './Toast.vue'

const defaultToast = {
    status: false,
    msg: 'Message',
    time: 2000
}

Toast.install = (Vue) => {
    let ToastCom = Vue.extend(Toast)
    Vue.prototype.$toast = function(params) {
        let toast = new ToastCom({
            el: document.createElement('div'),
            data() {
                if(params.time === 'short') this.time = 1000;
                else if(params.time === 'normal') this.time = 3000;
                else if(params.time === 'long') this.time = 5000;
                else this.time = 3000;
                return Object.assign(defaultToast, params);
            },
            mounted() {
                setTimeout(() => this.$refs.toast.style.opacity = 0, this.time);
                setTimeout(() => this.$refs.toast.remove(), this.time + 1000)
            },
        })
        document.body.appendChild(toast.$mount().$el)
    }
}

export default Toast