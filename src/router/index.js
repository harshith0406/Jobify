import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeVue.vue';
import JobsView from '@/views/JobsVue.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'
const router=createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home',
      component:HomeView,
    },
    {
      path:'/jobs',
      name:'jobs',
      component:JobsView,
    },
    {
      path:'/jobs/:id',
      name:'job',
      component:JobView,
    },
    {
      path:'/jobs/edit/:id',
      name:'edit-job',
      component:EditJobView,
    },
    {
      path:'/jobs/add',
      name:'addjob',
      component:AddJobView,
    },
    {
      path:'/:catchAll(.*)',
      name:'not-found',
      component:NotFoundView,
    }
    ],
});
export default router;