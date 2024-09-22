import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: () => import('../views/SkillsView.vue')
    },
    
    {
      path: "/Projects",
      name: "Projects",
      component: () =>
        import("../views/ProjectsView.vue"),
    },
    
    {
      
        path: "/Contact",
        name: "Contact",
        component: () =>
          import("../views/ContactView.vue"),
      
    }
   ]
});
/*
 router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  
  document.title = `${to.name}-MARK`;

  next()
})*/

export default router
