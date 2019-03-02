<template>
  <div class="question-wrapper">
    <h2 v-html="title"></h2>
    <div>
      <!-- find better way to bubble up events: State Manager? -->
      <SecondaryButton :index="index" value="True" :answer="answer" v-on="$listeners"/>
      <SecondaryButton :index="index" value="False" :answer="answer" v-on="$listeners"/>
    </div>
  </div>
</template>

<script>
import SecondaryButton from "./SecondaryButton";

export default {
  name: "Question",
  props: ["title", "answer", "index"],
  components: {
    SecondaryButton
  }
};
</script>

<style scoped lang="scss">
.question-wrapper {
  text-align: center;
  max-width: 600px;
  width: calc(100% - 40px);
  padding: 0;
  margin: 20px auto;

  h2 {
    font-size: 2rem;
  }
}
</style>

