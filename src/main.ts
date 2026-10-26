import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { restorePagesRoute } from './router/pagesFallback'
import './styles/global.css'

document.documentElement.classList.add('js')

async function bootstrap() {
  await restorePagesRoute(router)
  createApp(App).use(router).mount('#app')
}

void bootstrap()
