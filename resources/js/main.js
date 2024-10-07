import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import axios from 'axios'

// Styles
import '@core-scss/template/index.scss'
import '@layouts/styles/index.scss'

// Create vue app
const app = createApp(App)

axios.defaults.withCredentials = true

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
