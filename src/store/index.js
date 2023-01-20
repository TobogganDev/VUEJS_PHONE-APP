import { createStore } from 'vuex'

export default createStore({
  state: {
    date: new Date(),
    contact: [
      {
        name: 'Thomas',
        phone: '0614841434'
      },
      {
        name: 'marc',
        phone: '0614841434'
      }
    ],
    calls: [
      {
        name: 'Thomas',
      }
    ],
    open: false
  },
  getters: {
  },
  mutations: {
    missedCalls(state, call){
      state.calls.push(call);
    },
    newContact(state, perso){
      state.contact.push(perso);
    },
    modal(state){
      state.open = true;
    },
    close(state){
      state.open = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
