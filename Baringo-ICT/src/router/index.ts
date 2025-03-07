import { createRouter, createWebHistory } from 'vue-router';

// Import page components
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Courses from '@/pages/Courses.vue';
import Contact from '@/pages/Contact.vue';
import Registration from '@/pages/Registration.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/courses', component: Courses },
  { path: '/contact', component: Contact },
  { path: '/registration', component: Registration },
   
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
