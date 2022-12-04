import Vue from 'vue'
import App from './App.vue'

// -- css -- style --
import './assets/css/Men-Section.css'
//import './assets/css/Women-Section.css'
//import './assets/css/Unavaible-Section.css'

// -- router --
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
