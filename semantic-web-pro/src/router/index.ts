import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailFilm from '../views/FilmDetail.vue'
import QueryPage from '../views/QueryPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:name',
      name: 'DetailFilm',
      component: DetailFilm
    },
    {
      path: '/general',
      name: 'QueryPage',
      component: QueryPage
    }
  ]
})

export default router
