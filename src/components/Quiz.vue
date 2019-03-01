<template>
  <div>
    <div v-for="(question, index) in quiz" v-bind:key="index">
      <!-- todo: make question.question more semantically readable -->
      <div v-show="index === questionIndex">
        <Question
          :title="question.question"
          :index="index"
          :answer="question.correct_answer"
          v-on:next="next"
        ></Question>
      </div>
    </div>
    <!-- todo: check if this can be a slot -->
    <div v-show="questionIndex === quiz.length" class="results">
      <p>You got</p>
      <p>{{calculatePercentage() }}%</p>
      <p>of the questions right</p>
      <PrimaryButton></PrimaryButton>
    </div>
  </div>
</template>

<script>
import Question from "./Question";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";

export default {
  name: "Quiz",
  components: {
    Question,
    PrimaryButton
  },
  data() {
    return {
      // todo: proper error handling, use 'loading' and 'error' in a meaningful way
      quiz: null,
      loading: true,
      error: false,
      questionIndex: 0,
      correctAnswers: 0
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
    },
    calculatePercentage: function() {
      return (this.correctAnswers / this.quiz.length) * 100;
    }
  }
};
</script>

<style scoped lang="scss">
.results {
  margin-top: 40px;

  p {
    font-size: 2rem;
    text-align: center;
  }
}
</style>