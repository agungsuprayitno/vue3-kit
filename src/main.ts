import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
if (typeof window !== 'undefined') {
    import('./pwa')
}

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})
const app = createApp(App)

app.use(router).use(createPinia()).mount('#app')
