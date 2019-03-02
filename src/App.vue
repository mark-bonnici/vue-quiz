<template>
  <div id="app">
    <vue-particles color="#f1e15b"></vue-particles>
    <Header/>
    <Quiz/>
  </div>
</template>

<script>
import Vue from "vue";
import VueParticles from "vue-particles";

import Quiz from "./components/Quiz";
import Header from "./components/layout/Header";

Vue.use(VueParticles);

export default {
  name: "app",
  components: {
    Quiz,
    Header
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#particles-js {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
}
</style>
