<template>
  <div>
    <!-- todo: make "questionIndex != this.quiz.length" as a computed property -->
    <div v-if="questionIndex != this.quiz.length">
      <div v-for="(question, index) in quiz" v-bind:key="index">
        <!-- todo: make question.question more semantically readable -->
        <div v-show="index === questionIndex">
          <Question
            :title="question.question"
            :index="index"
            :answer="question.correct_answer"
            @next="next"
          ></Question>
        </div>
      </div>
    </div>
    <!-- todo: make "questionIndex != this.quiz.length" as a computed property -->
    <Results
      v-if="questionIndex === this.quiz.length"
      :correctAnswers="this.correctAnswers"
      :ladder="this.ladderPosition"
      @refresh="refresh"
    ></Results>
  </div>
</template>

<script>
import Question from "./Question";
import Results from "./Results";

import axios from "axios";
import { db } from "../main";

export default {
  name: "Quiz",
  components: {
    Question,
    Results
  },
  data() {
    return {
      // todo: proper error handling, use 'loading' and 'error' in a meaningful way
      quiz: [],
      loading: true,
      error: false,
      questionIndex: 0,
      correctAnswers: 0,
      scores: [],
      worsePerformers: 0,
      ladderPosition: 0
    };
  },
  mounted() {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=boolean")
      .then(res => (this.quiz = res.data.results))
      .catch(() => (this.error = true))
      .finally(() => (this.loading = false));
  },
  methods: {
    next: function(choice) {
      if (choice) this.correctAnswers++;
      this.questionIndex++;
      if (this.questionIndex === this.quiz.length)
        this.ladderPosition = this.calculatePerformance();
    },
    refresh: function() {
      this.questionIndex = 0;
      this.worsePerformers = 0;
      this.correctAnswers = 0;
      this.addScore(this.correctAnswers);
    },
    calculatePerformance: function() {
      for (let i = 0; i < this.scores.length; i++) {
        if (this.scores[i].score < this.correctAnswers) this.worsePerformers++;
      }
      return ((this.worsePerformers / this.scores.length) * 100).toFixed(2);
    },
    addScore: function(userScore) {
      this.$firestore.scores.add({
        score: userScore
      });
    }
  },
  firestore() {
    return {
      scores: db.collection("scores")
    };
  }
};
</script>

<style scoped lang="scss">

</style>