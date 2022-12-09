import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/index.vue"
import AboutView from "../views/about.vue"
import governingCommittee from "../views/governingCommittee.vue"
import schoolAnthem from "../views/schoolAnthem.vue"
import managingPartnersMessage from "../views/managingPartnersMessage.vue"
import principalMessage from "../views/principalMessage.vue"
import FAQ from "../views/FAQ.vue"
import contactUs from "../views/contactUs.vue"
import aboutHistory from "../views/aboutHistory.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      children:[
        {
          path:"history",
          component:aboutHistory
        },
        {
          path:"governing-committee",
          component:governingCommittee
        },
        {
          path:"school-anthem",
          component:schoolAnthem
        },
        {
          path:"managing-partners-message",
          component:managingPartnersMessage
        },
        {
          path:"principal-message",
          component:principalMessage
        },
        {
          path:"Faq",
          component:FAQ
        },
        {
          path:"contact-us",
          component:contactUs
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
