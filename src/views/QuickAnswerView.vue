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
          <input
            type="text"
            v-model.trim.lazy="querySearch"
            placeholder="How much vitamin c is in 2 apples?"
          />
          <img src="../assets/icons/lupa.svg" alt="lupa" />
        </div>
      </div>
      <div class="answer d-flex flex-column justify-content-start">
        <h3>Answer</h3>
        <h5 v-if="querySearch == ''">Type a question to get an answer</h5>
        <h5 v-else-if="error">No answer found for that question</h5>
        <img src="@/assets/loading.gif" alt="loading" v-else-if="loading" />

        <div v-else class="d-flex justify-content-center flex-column">
          <img :src="response.image" alt="answer image" />
          <p>{{ response.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers(
  "Recipes/quickAnswer"
);
export default {
  name: "QuickAnswerView",
  data() {
    return {
      querySearch: "",
      response: "",
      loading: false,
      error: false,
    };
  },
  computed: {
    ...mapGetters(["getAnswerQuery"]),
  },
  mounted() {
    this.querySearch = this.getAnswerQuery;
  },
  watch: {
    querySearch(newValue) {
      newValue == "" ? (this.loading = true) : this.getResult();
    },
  },
  methods: {
    ...mapActions(["getQuickAnswer"]),
    async getResult() {
      await this.getQuickAnswer(this.querySearch)
        .then((this.loading = true))
        .then((this.error = false))
        .then((response) => (this.response = response))
        .catch((res) => (this.response = ""));
      if (Object.keys(this.response) != 0) {
        this.loading = false;
      } else {
        setTimeout(() => (this.error = true), 2500);
      }
    },
  },
};
</script>

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
  width: 100vw;
  max-width: 415px;
  gap: 20px;
}
.answer > h3 {
  margin-bottom: 0;
}
.answer > div {
  gap: 20px;
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
