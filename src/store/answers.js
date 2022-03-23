

export default {
  state: {
    answers: [
      // {
      //   a: 0, b: 0, c: 0, d: 0,
      // },
      // {
      //   a: 0, b: 0, c: 0, d: 0,
      // },
      // {
      //   a: 0, b: 0, c: 0, d: 0,
      // },
    ],
    stats: []
  },
  mutations: {
    addUserAnswers(state, answers) {
      state.answers = answers;
    },
    getAnswers(state, answers) {
      state.answers = answers;
    },
    combineStatistics(state, stats) {
      state.stats = stats;
    },
    fetchStatistics(state, stats) {
      state.stats = stats;
    }
  },
  actions: {
    // async initFbAnswers() {
    //   let answers = [
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //     {
    //       a: 0, b: 0, c: 0, d: 0,
    //     },
    //   ]
    //   const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/answers.json', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       ...answers
    //     })
    //   })
    //   console.log(response)
    // },
    async addUserAnswers({ commit, dispatch }, userAnswers) {
      await dispatch('getAnswers');
      let answers = this.getters.getAllAnswers;
      for (let key in answers) {
        answers[key][userAnswers[key]]++
      }

      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/answers.json', {
        method: 'PUT',
        body: JSON.stringify({
          ...answers
        })
      })
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }
      console.log("3. ответы Юзер +  fb: ", { ...answers });
      commit("addUserAnswers", {
        ...answers
      })
    },
    async getAnswers(context) {
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/answers.json')

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }

      let answers = []
      for (const key in responseData) {
        const answer = {
          a: responseData[key].a,
          b: responseData[key].b,
          c: responseData[key].c,
          d: responseData[key].d,
        }
        answers.push(answer)
      }
      console.log("2. ответы в fb: ", { ...answers });
      context.commit("getAnswers", answers)
    },
    async combineStatistics(context) {
      let stats = []
      let quiz = this.getters.getQuestions;
      for (let key in quiz) {
        stats.push(
          {
            question: quiz[key]["question"],
            correctAnswer: quiz[key]["correctAnswer"],
            img: quiz[key]["img"],
            answers: {
              a: {
                letter: "a",
                title: quiz[key]["answers"]["a"],
                statistics: this.getters.getAllAnswers[key]["a"],
              },
              b: {
                letter: "b",
                title: quiz[key]["answers"]["b"],
                statistics: this.getters.getAllAnswers[key]["b"],
              },
              c: {
                letter: "c",
                title: quiz[key]["answers"]["c"],
                statistics: this.getters.getAllAnswers[key]["c"],
              },
              d: {
                letter: "d",
                title: quiz[key]["answers"]["d"],
                statistics: this.getters.getAllAnswers[key]["d"],
              },
            }
          }
        )
      }
      console.log("4. compute stats: ", stats)
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/stats.json', {
        method: 'PUT',
        body: JSON.stringify({
          ...stats
        })
      })
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }


      context.commit("combineStatistics", stats)
    },
    async fetchStatistics({ commit, dispatch }) {
      await dispatch('combineStatistics')
      const response = await fetch('https://quiz-49060-default-rtdb.firebaseio.com/stats.json')

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message);
        throw error;
      }

      // console.log(responseData)

      let stats = []
      let quiz = this.getters.getQuestions;
      for (let key in quiz) {
        stats.push(
          {
            question: responseData[key]["question"],
            correctAnswer: responseData[key]["correctAnswer"],
            img: responseData[key]["img"],
            answers: {
              a: {
                letter: "a",
                title: responseData[key]["answers"]["a"],
                statistics: this.getters.getAllAnswers[key]["a"],
              },
              b: {
                letter: "b",
                title: responseData[key]["answers"]["b"],
                statistics: this.getters.getAllAnswers[key]["b"],
              },
              c: {
                letter: "c",
                title: responseData[key]["answers"]["c"],
                statistics: this.getters.getAllAnswers[key]["c"],
              },
              d: {
                letter: "d",
                title: responseData[key]["answers"]["d"],
                statistics: this.getters.getAllAnswers[key]["d"],
              },
            }
          }
        )
      }
      console.log("5/ это данные стат.фаербейс: ", stats)
      commit("fetchStatistics", stats)
    }
  },
  getters: {
    getAllAnswers(state) {
      return state.answers
    },
    getStatistics(state) {
      return state.stats
    },
  },

}