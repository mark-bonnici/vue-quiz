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
import Question from "./components/Question";
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
  background: #000;
  color: #fff;
  width: 100wh;
	height: 90vh;
	background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	animation: Gradient 15s ease infinite;
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
#particles-js {
  background-image: url(/static/img/sky.871d198.jpg);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
