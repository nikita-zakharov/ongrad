import '../scss/index.scss'
import Vue from 'vue'
import router from '../js/router/index'
import store from '../js/store/index.js'
import App from './components/App.vue'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
