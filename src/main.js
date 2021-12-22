import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/store/subscriber')

axios.defaults.baseURL = 'http://localhost:8080/api/'

import 'bootswatch/dist/journal/bootstrap.min.css'
let data = {
    "token": localStorage.getItem('token'),
    "id": localStorage.getItem('id')
}
store.dispatch('auth/attempt', data).then(() => {
    createApp(App).use(store).use(router).mount('#app')
})

