import '@/assets/sass/app.sass';
import Vue from 'vue'
import App from './App.vue'
import Cart from './components/cart/CartList'
import VueRouter from 'vue-router'
import Home from "./components/home/Home";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/cart', name: 'cart', component: Cart }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
