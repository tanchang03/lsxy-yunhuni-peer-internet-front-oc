import {
  MEMBER_COUNT,
} from '../mutation-types'

const state = {

}

const mutations = {
  [MEMBER_COUNT] (state, member) {
    state.count = member
  },
}

export default {
  state,
  mutations
}
