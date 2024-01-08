import './assets/main.css'
import './assets/checkbox.css'
import './assets/button.css'
import './assets/form.css'
import './assets/table.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
