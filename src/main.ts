import { createApp } from 'vue'
import './style.css'
import vuetify from './plugins/vuetify'
import roteador from './router/index.ts'
import App from './App.vue'


createApp(App)
    .use(vuetify)
    .use(roteador)
    .mount('#app')
