import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView.vue";
import collegeView from "../views/collegeView.vue";
import elementaryView from "../views/elementaryView.vue";
import preschoolView from "../views/preschoolView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      redirect: "/home",
      children: [
        {
          path: "/home",
          alias: "/",
          component: () => import("../views/index.vue"),
        },
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
        {
          path: "/gallery",
          name: "gallery",
          component: () => import("../views/galleryHome.vue"),
          redirect: "/gallery/categories",
          children: [
            {
              path: "categories",
              component: () => import("../components/galleryCategory.vue"),
            },
            {
              path: "categories/:id",
              component: () => import("../components/galleryCatalogue.vue"),
            },
          ],
        },
        {
          path: "/jobs",
          name: "jobs",
          component: () => import("../views/jobs.vue"),
          redirect: "/jobs/postings",
          children: [
            {
              path: "postings",
              component: () => import("../components/jobPostings.vue"),
            },
            {
              path: "postings/:id",
              component: () => import("../components/jobPost.vue"),
            },
          ],
        },
        {
          path: "/events",
          name: "events",
          component: () => import("../views/events.vue"),
          children: [],
        },
        {
          path: "/events/:id",
          component: () => import("../views/eventDetail.vue"),
        },
        {
          path: "/news",
          name: "news",
          component: () => import("../views/blog.vue"),
          children: [],
        },
        {
          path: "/news/:id",
          component: () => import("../views/blogpost.vue"),
        },
      ],
    },
    {
      path: "/schools",
      redirect: "/schools/preschool",
    },
    {
      path: "/schools/college/",
      component: collegeView,
      children: [
        {
          path: "",
          name: "collegeHome",
          component: () => import("../views/pages/college/index.vue"),
        },
      ],
    },
    {
      path: "/schools/elementary",
      name: "ElementaryHome",
      component: elementaryView,
      children: [],
    },
    {
      path: "/schools/preschool",
      name: "preschoolHome",
      component: preschoolView,
      children: [],
    },
    {
      path:"/admin",
      component:()=>import("../admin/index.vue"),
      redirect:"/admin/signin",
      children:[
        {
          path:"signin",
          component:()=>import('../admin/login.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
