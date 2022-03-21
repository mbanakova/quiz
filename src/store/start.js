

export default {

  state: {
    credentials: {},
  },
  mutations: {
    saveCredentials(state, userCredentials) {
      state.credentials = userCredentials;
    }
  },
  actions: {
    async saveCredentials(context, userCredentials) {
      const credentials = {
        username: userCredentials.username,
        age: userCredentials.age,
        sex: userCredentials.sex,
      }
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify({
          ...credentials
        })
      })
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }

      context.commit("saveCredentials", { ...credentials })
    }
  },
  getters: {
    getUserCredentials(state) {
      return state.credentials
    },
    getUserName(state) {
      return state.credentials.username
    },
  },
}
