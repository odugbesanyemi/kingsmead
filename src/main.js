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
app.mixin({
  methods: {
    async isloggedIn() {
        try{
            const jwt = cookie.get("jwt");
            if (jwt) {
              await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/isloggedin`, {headers: { Authorization: `Bearer ${jwt}` },})
                .then((result) => {
                  // get user data since user is logged in
                    cookie.set('user',1)
                    this.$router.push({path:"/admin/dashboard"})
                })
                .catch((error) => {
                  console.log("Your session has expired. Kindly log in to continue");
                  this.$router.push({path:"/admin/signin"})
                  console.log(error)
                });
            } else {
              // user is not logged in redirect to signin page
              this.$router.push({ path: "/admin/signin" });
            }
        }catch{
            console.log('Unexpected error encountered')
        }
    },
  },
});
app.use(VueViewer);
app.use(router);
app.mount("#app");
