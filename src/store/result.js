
export default {
  state: {
    result: null
  },
  mutations: {
    saveResults(state, result) {
      state.result = result;
    }
  },
  actions: {
    async saveResults(context, userResult) {
      const result = {
        correctAnswers: userResult.correctAnswers,
        wrongAnswers: userResult.wrongAnswers,
        time: userResult.time,
        username: userResult.username,
        age: userResult.age,
        sex: userResult.sex,
      }
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/result.json', {
        method: 'POST',
        body: JSON.stringify({
          ...result
        })
      })
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }


      context.commit("saveResults", result)
    },
    async getResult(context) {
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/result.json')

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }

      const result = {
        correctAnswers: responseData.correctAnswers,
        wrongAnswers: responseData.wrongAnswers,
        time: responseData.timer,
        username: responseData.username,
        age: responseData.age,
        sex: responseData.sex,
      }
      context.commit("getResult", result)
    },

  },


  getters: {
    getUserResult(state) {
      return state.result
    }
  }
}