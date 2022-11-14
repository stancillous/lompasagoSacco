import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    name:'home page',
    component:()=> import(/* webpackChunkName: "home" */ '../components/HomePage.vue')
  },
  
  {
    path:'/contact',
    name:'contact page',
    component:()=> import(/* webpackChunkName: "contact" */ '../components/ContactUs.vue')
  },
  
  {
    path:'/savings',
    name:'savings',
    component:()=> import(/* webpackChunkName: "savings" */ '../components/SavingsComp.vue')
  },
  {
    path:'/membership',
    name:'join us',
    component:()=> import(/* webpackChunkName: "membership" */ '../components/JoinUs.vue')
  },
  {
    path:'/loans',
    name:'loans',
    component:()=> import(/* webpackChunkName: "loans" */ '../components/LoansComp.vue')
  }, 

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutComp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:'activeNavLink',
  scrollBehavior(to,from,savedPosition){
    return savedPosition || {top:0}
  }
})

export default router
