

export default {
  state: {
    rating: [],
  },
  mutations: {
    addUserResult(state, userResult) {
      state.rating.push(userResult);
    },
    fetchRating(state, rating) {
      state.rating = rating;
    },
  },
  actions: {
    async addUserResult(context, userResult) {
      const result = {
        correctAnswers: userResult.correctAnswers,
        wrongAnswers: userResult.wrongAnswers,
        time: userResult.time,
        username: userResult.username,
        age: userResult.age,
        sex: userResult.sex,
      }
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/rating.json', {
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

      context.commit("addUserResult", userResult)
    },

    async fetchRating(context) {
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/rating.json')

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }
      const rating = []
      for (const key in responseData) {
        const rates = {
          id: key,
          correctAnswers: responseData[key].correctAnswers,
          wrongAnswers: responseData[key].wrongAnswers,
          time: responseData[key].time,
          username: responseData[key].username,
          age: responseData[key].age,
          sex: responseData[key].sex,
        }
        rating.push(rates)
      }
      context.commit("fetchRating", rating)
    },

  },
  getters: {
    getRating(state) {
      return state.rating
    }
  },
}
