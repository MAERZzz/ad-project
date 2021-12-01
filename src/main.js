import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
//import fb from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
  const firebaseConfig = {
  apiKey: "AIzaSyAMZX7lF4GMpt8xYfdm3RHw8EpIOJDqbvA",
  authDomain: "ad-project-5fcc8.firebaseapp.com",
  projectId: "ad-project-5fcc8",
  storageBucket: "ad-project-5fcc8.appspot.com",
  messagingSenderId: "1055263872410",
  appId: "1:1055263872410:web:9bff162d8c6baeeec95623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}
}).$mount('#app')