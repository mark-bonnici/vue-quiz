<template>
  <div class="question-wrapper">
    <h2 v-html="title"></h2>
    <div>
      <!-- is vuex the only way to bubble up events? -->
      <!-- todo: remove duplicate code below -->
      <div class="btn-wrapper">
        <div class="btn-wrapper__container">
          <div class="btn-inner false">
            <button
              class="btn-inner__text"
              v-on:click="$emit('next', answer === 'False')"
              v-bind:name="index"
            >False</button>
          </div>
        </div>
      </div>
      <div class="btn-wrapper">
        <div class="btn-wrapper__container">
          <div class="btn-inner true">
            <button
              class="btn-inner__text"
              v-on:click="$emit('next', answer === 'True')"
              v-bind:name="index"
            >True</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: ["title", "answer", "index"]
};
</script>
<style scoped lang="scss">
$btn-color-primary: #13f779;
$btn-color-bg: #413e6b;

button {
  text-decoration: none;
  color: $btn-color-primary;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

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

.btn-wrapper {
  width: 290px;
  height: 110px;
  position: relative;
  margin: 40px auto 0;

  &:hover {
    .btn-inner {
      top: -4px;
      transform: scale(1, 1);
      cursor: pointer;
    }
  }

  &__container {
    border-bottom: 2px solid $btn-color-primary;
    position: absolute;
    width: 100%;
    height: 80px;

    &:before,
    &:after {
      border-bottom: 2px solid $btn-color-primary;
      width: 96%;
      left: 2%;
      bottom: -8px;
      content: "";
      position: absolute;
    }

    &:after {
      width: 92%;
      left: 4%;
      bottom: -14px;
    }

    .btn-inner {
      width: 104.2%;
      height: 100%;
      position: absolute;
      top: 20px;
      left: -2.1%;
      border: 2px solid $btn-color-primary;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Source Code Pro", monospace;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 18px;
      background: $btn-color-bg;
      transform: scale(0.96, 0.96);
      transition: all 0.3s;
      z-index: 4;

      &__text {
        text-decoration: none;
        color: $btn-color-primary;
      }
    }
  }
}
</style>

