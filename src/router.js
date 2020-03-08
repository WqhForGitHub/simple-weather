import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/view/main.vue")
    },
    {
      path: "/nowCard",
      component: () => import("@/view/nowCard.vue")
    },
    {
      path: "/todayCard",
      component: () => import("@/view/todayCard.vue")
    },
    {
      path: "/tomorrowCard",
      component: () => import("@/view/tomorrowCard.vue")
    },
    {
      path: "/afterTomoCard",
      component: () => import("@/view/afterTomoCard.vue")
    }
  ]
});
