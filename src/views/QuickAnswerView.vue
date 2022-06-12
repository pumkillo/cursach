<template>
  <div class="needpad">
    <h1>Quick answer</h1>
    <h2>
      You can answer a question and get an answer quickly! Ask us something...
    </h2>
    <div class="quickAnswer d-flex justify-content-between">
      <div class="question d-flex justify-content-start flex-column">
        <h3>Type your question here</h3>
        <div class="search">
          <input type="text" />
          <img src="../assets/icons/lupa.svg" alt="lupa" />
        </div>
      </div>
      <div class="answer d-flex justify-content-center flex-column">
        <h3>Answer</h3>
        <img
          src="https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
          alt="answer imge"
        />
        <p>
          There are 16.74 mg of Vitamin C in 2 how much is in apples. This
          covers about 20% of your daily needs of Vitamin C.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.quickAnswer {
  padding: 0 20px;
  height: min-content;
}
h3 {
  font-weight: 600;
  font-size: 4em;
  color: $green;
  margin-bottom: 20px;
  text-align: center;
}

input {
  width: 515px;
}

input:focus-visible,
input:focus {
  border: 0.5px solid $green;
}
.answer {
  max-width: 415px;
  gap: 20px;
}
.answer > h3 {
  margin-bottom: 0;
}
img {
  max-width: 100px;
  margin: 0 auto;
}
p {
  font-weight: 500;
  font-size: 3em;
  text-align: center;
}
</style>
