import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/about",
          component: () => import("../views/aboutHistory.vue"),
        },
        {
          path: "about/history",
          component: () => import("../views/aboutHistory.vue"),
        },
        {
          path: "about/governing-committee",
          component: () => import("../views/governingCommittee.vue"),
        },
        {
          path: "about/school-anthem",
          component: () => import("../views/schoolAnthem.vue"),
        },
        {
          path: "about/managing-partners-message",
          component: () => import("../views/managingPartnersMessage.vue"),
        },
        {
          path: "about/principal-message",
          component: () => import("../views/principalMessage.vue"),
        },
        {
          path: "about/Faq",
          component: () => import("../views/FAQ.vue"),
        },
        {
          path: "about/contact-us",
          component: () => import("../views/contactUs.vue"),
        },
        {
          path: "academics/student-leadership",
          component: () => import("../views/studentLeadership.vue"),
        },
        {
          path: "academics",
          component: () => import("../views/studentLeadership.vue"),
        },
        {
          path: "academics/curriculum",
          component: () => import("../views/curriculum.vue"),
        },
        {
          path: "academics/learning-environment",
          component: () => import("../views/learningEnvironment.vue"),
        },
        {
          path: "academics/library",
          component: () => import("../views/library.vue"),
        },
        {
          path: "life-at-kingsmead",
          component: () => import("../views/studentLife.vue"),
        },
        {
          path: "life-at-kingsmead/studentLife",
          component: () => import("../views/studentLife.vue"),
        },
        {
          path: "life-at-kingsmead/pastoral-unit",
          component: () => import("../views/pastoral-unit.vue"),
        },
        {
          path: "life-at-Kingsmead/Alumni",
          component: () => import("../views/Alumni.vue"),
        },
        {
          path: "life-at-Kingsmead/school-report",
          component: () => import("../views/school-report.vue"),
        },
        {
          path: "/admissions",
          component: () => import("../views/criteria-policy.vue"),
        },
        {
          path: "admissions/criteria-policy",
          component: () => import("../views/criteria-policy.vue"),
        },
        {
          path: "admissions/registration-form",
          component: () => import("../views/registration-form.vue"),
        },
        {
          path: "admissions/fees-deposit",
          component: () => import("../views/fees-deposit.vue"),
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
