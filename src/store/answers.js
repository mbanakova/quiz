

export default {

  state: {
    answers: [
      {
        a: 0, b: 0, c: 0, d: 0,
      },
      {
        a: 0, b: 0, c: 0, d: 0,
      },
      {
        a: 0, b: 0, c: 0, d: 0,
      },
    ],
    stats: []
  },
  mutations: {
    addUserAnswers(state, answers) {
      state.answers = answers;
    },
    combineStatistics(state, stats) {
      state.stats = stats;
    },
  },
  actions: {
    async addUserAnswers(context, userAnswers) {
      let answers = this.getters.getAllAnswers;
      for (let key in userAnswers) {
        answers[key][userAnswers[key]]++
      }
      context.commit("addUserAnswers", answers)
    },
    async combineStatistics(context) {
      let stats = []
      let quiz = this.getters.getQuestions;
      console.log(quiz[0]["question"])
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
      context.commit("combineStatistics", stats)
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
