import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ResumePage from '@/views/ResumePage.vue';
import IdeasPage from '@/views/IdeasPage.vue';
import ContactPage from '@/views/ContactPage.vue';

// \/\/ DEFAULT CODE \/\/
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
// ];

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/resume',
    name: 'ResumePage',
    component: ResumePage,
  },
  {
    path: '/ideas',
    name: 'IdeasPage',
    component: IdeasPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? "Kevin Chen's Website";
  next();
});

export default router;
