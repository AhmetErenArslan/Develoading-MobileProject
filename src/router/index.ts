import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import SignUpForm from '@/views/SignUpForm.vue';
import LoginPage from '@/views/LoginPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUpForm,
    beforeEnter: (to, from, next) => {
      const isRegistered = localStorage.getItem('userRegistered');
      if (isRegistered) {
        next({ name: 'Login' });
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;