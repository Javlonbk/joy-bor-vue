import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import Filter from '../pages/Filter.vue'
import AnnounceInfo from '../pages/AnnounceInfo.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  // {
  //   path:"/:pathMatch(.*)*",
  //   component: NotFound
  // },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path:"/filter",
    name: "filter",
    component: Filter
  },
  {
    path:"/all",
    name:"all",
    component:Home
  },
  {
    path:"/students",
    name:"students",
    component:Home
  },
  {
    path:"/guys",
    name:"guys",
    component:Home
  },
  {
    path:"/girls",
    name:"girls",
    component:Home
  },
  {
    path:"/family",
    name:"family",
    component:Home
  },
  {
    path:"/forSale",
    name:"forSale",
    component:Home
  },
  {
    path:"/allSections",
    name:"allSections",
    component:Home
  },
  {
    path:"/announceInfo",
    name:"announceInfo",
    component: AnnounceInfo
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;