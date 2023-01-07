import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import VAnimateCss from 'v-animate-css';


// import '@heroicons/vue/outline'
const app = createApp(App)
app.use(VAnimateCss);
app.use(VueViewer)
app.use(router)
app.mount('#app')
