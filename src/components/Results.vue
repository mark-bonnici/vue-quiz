<template>
  <div class="results">
    <h2>You got {{correctAnswers }} of the questions right</h2>
    <p>You did better then {{ladder}}% of all challengers</p>
    <PrimaryButton v-on="$listeners"></PrimaryButton>
  </div>
</template>

<script>
import PrimaryButton from "./PrimaryButton";

export default {
  name: "Results",
  props: ["ladder", "correctAnswers"],
  components: {
    PrimaryButton
  },
};
</script>

<style scoped lang="scss">
.results {
  margin-top: 40px;

  h2, p {
    font-size: 2rem;
    text-align: center;
  }
}
</style>

