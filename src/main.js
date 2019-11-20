// this is importing each component created to this pages
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import ServiceProvider from './components/ServiceProvider'
import Admin from "./components/Admin"

Vue.config.productionTip = false

// this is where i set up the routes responsible for navigating through pages with thier names
// at the call of each routes the component will be called mounted
Vue.use(VueRouter)

const routes=[
  
  {
    path:'/login',
    component:Login,
    name:'login'
  },
  {
    path:'/signup',
    component:Signup,
    name:'signup'
  },
  {
    path:'/dashboard',
    component:ServiceProvider,
    name:'dashboard'
  },
  {
    path:'/admin',
    component:Admin,
    name:'admin'
  },
 
];
const router=new VueRouter({
  mode:"history",
  routes, 
  base:'/login'
})

// this is where the all router and vuetify registered is added to our apllication

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
