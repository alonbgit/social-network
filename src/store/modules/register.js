import axios from 'axios';

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {

   registerUser(context, user) {
     return axios.post('http://localhost:3000/register', user);
   }

}

export default {
  state,
  getters,
  mutations,
  actions
}
