import { createStore } from 'vuex'
import start from './start'
import result from './result'
import rating from './rating'
import quiz from './quiz'
import answers from './answers'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    start, result, rating, quiz, answers
  }
})
