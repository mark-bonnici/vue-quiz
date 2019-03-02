import Vue from "vue";
import App from "./App.vue";
import VueFirestore from 'vue-firestore';

import { firebase } from "@firebase/app";
import "@firebase/firestore";

// todo: move this to .env file (THIS SHOULD NOT BE PUSHED TO GIT)
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcyYL2dJoNs46khGduEWwDiY-rYKBFW88",
  authDomain: "quiz-scores-68c12.firebaseapp.com",
  databaseURL: "https://quiz-scores-68c12.firebaseio.com",
  projectId: "quiz-scores-68c12",
  storageBucket: "",
  messagingSenderId: "940756960181"
});

Vue.config.productionTip = false;
Vue.use(VueFirestore);

export const db = firebaseApp.firestore();

new Vue({
  render: h => h(App)
}).$mount("#app");
