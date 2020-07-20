import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import   firebase from 'firebase/app'
import vuetify from './plugins/vuetify'
import 'firebase/database'


Vue.config.productionTip = false




// this.$store.dispatch('fetchHeroes')


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCsEPAhOmurlhOq5KqEg4bBFcRldgay8-Q",
      authDomain: "superheronew-a4f34.firebaseapp.com",
      databaseURL: "https://superheronew-a4f34.firebaseio.com",
      projectId: "superheronew-a4f34",
      storageBucket: "superheronew-a4f34.appspot.com",
      messagingSenderId: "204892364352",
      appId: "1:204892364352:web:ba88f548624583381c09a5"
    })
    this.$store.dispatch('fetchHeroes')

  }


}).$mount('#app');
