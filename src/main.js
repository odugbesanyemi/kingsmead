import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import "viewerjs/dist/viewer.css";
import VueSplide from "@splidejs/vue-splide";
import cookie from 'js-cookie'
import axios from 'axios'
import "@splidejs/vue-splide/css";
import VueViewer from "v-viewer";
import VAnimateCss from "v-animate-css";
// import '@heroicons/vue/outline'
const app = createApp(App);
app.use(VAnimateCss);
app.use(VueSplide);
app.use(VueViewer);
app.use(router);
app.mount("#app");
