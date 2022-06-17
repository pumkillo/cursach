const quickAnswer = {
  namespaced: true,
  state: {
    answerQuery: "How much vitamin c is in 2 apples?",
  },
  getters: {
    getAnswerQuery(state) {
      return state.answerQuery;
    },
  },
  mutations: {
    changeAnswerQuery(state, newQuery) {
      state.answerQuery = newQuery;
    },
  },
  actions: {
    async getQuickAnswer({ commit }, query) {
      const res = await fetch(
        process.env.VUE_APP_FETCH_BASE_URL +
          "/recipes/quickAnswer?q=" +
          query +
          "&apiKey=" +
          process.env.VUE_APP_API_KEY
      ).then((response) => response.json());
      // let res = new Promise(function (resolve, reject) {
      //   resolve({
      //     answer:
      //       "In 2 how much is in apples, there are 16.74 mg of Vitamin C. This amount covers 20% of your daily needs of Vitamin C.",
      //     image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
      //     type: "NUTRITION",
      //   });
      // }).then((response) => response);
      if (Object.keys(res) != 0) {
        commit("changeAnswerQuery", query);
      }
      return res;
    },
  },
};
export default quickAnswer;
