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
      if (Object.keys(res) != 0) {
        commit("changeAnswerQuery", query);
      }
      return res;
    },
  },
};
export default quickAnswer;
