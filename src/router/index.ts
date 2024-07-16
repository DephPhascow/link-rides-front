import { useSession } from '@/stores/session'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { auth: false, meta: {title: "Главная страница", description: "Главная страница сайта"} }
    },
    {
      path: '/Test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
      meta: { auth: false, meta: {title: "Главная страница", description: "Главная страница сайта"} }
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue'),
      meta: { auth: false, meta: {title: "Регистрация", description: "Регистрация сайта"} }
    },
    {
      path: '/TaxiSearch',
      name: 'TaxiSearch',
      component: () => import('../views/TaxiSearchView.vue'),
      meta: { auth: false, meta: {title: "Поиск такси", description: "Поиск такси сайта"} }
    },
    {
      path: '/Trip',
      name: 'Trip',
      component: () => import('../views/TripView.vue'),
      meta: { auth: false, meta: {title: "Поездка", description: "Поездка сайта"} }
    },
    {
      path: '/TaxiProfile',
      name: 'Taxi-Profile',
      component: () => import('../views/TaxiProfileView.vue'),
      meta: { auth: false, meta: {title: "Профиль", description: "Профиль таксиста"} }
    },
    {
      path: '/TaxiHistory',
      name: 'Taxi-History',
      component: () => import('../views/TaxiHistoryView.vue'),
      meta: { auth: false, meta: {title: "История", description: "История поездки"} }
    },
    {
      path: '/DriverRegistration',
      name: 'DreverInfo',
      component: () => import('../views/DriverRegistrationView.vue'),
      meta: { auth: false, meta: {title: "Информация", description: "Инфо о водителе"} }
    },
    {
      path: '/TaxiOffer',
      name: 'TaxiOffer',
      component: () => import('../views/TaxiOfferView.vue'),
      meta: { auth: false, meta: {title: "Информация", description: "Страница таксиста"} }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'), 
      meta: { meta: {title: 'Страница не найдена'} }
    },      
  ],
  scrollBehavior() {
    return { top: 0 }
  }    
})

router.beforeEach(async (to, from, next) => {
  const uSession = useSession()
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && !(await uSession.isActive())) {
    localStorage.clear()
    next('/')
  } else {
    next()
  }  
})

export default router
