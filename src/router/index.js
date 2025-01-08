import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Project from '../components/Projects.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'project',
      component: Project,
    },
  
  ],
})

export default router
