import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state:{
    counter:0,
    colorCode:'red'
  },
  mutations:{
    increaseCounter(state,randomNumber){
      // state.counter++
      console.log(`random increase number: `,randomNumber);
      state.counter += randomNumber
    },
    decreaseCounter(state,randomNumber){
      // state.counter--
      console.log('random decrease is number: ',randomNumber);
      state.counter -= randomNumber
    },
    setColorCode(state,newValue){
      state.colorCode = newValue
    }
  },
  actions:{
    decreaseCounter({ commit }){
      console.log('decreaseCounter (action)');
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res => {
        // console.log(res)
        commit('decreaseCounter',res.data)
      })
    },
    increaseCounter({ commit }){
      console.log('decreaseCounter (action)');
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res => {
        // console.log(res)
        commit('increaseCounter',res.data)
    })
  },
  setColorCode({commit},newValue){
    commit('setColorCode',newValue)
  }
},
getters:{
  counterSqure(state){
    return state.counter * state.counter
  }
}

})
