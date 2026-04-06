
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineCustomElements } from 'ionicons/loader';

import App from './App.vue'
import Index from './views/index/Index.vue'
import router from './router'

defineCustomElements(window);

const app = createApp(Index)

app.use(createPinia())
app.use(router)


app.mount('#index')
