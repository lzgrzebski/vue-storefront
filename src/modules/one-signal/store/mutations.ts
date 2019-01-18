import { OneSignalState } from '../types'
import { GetterTree, MutationTree } from 'vuex'
import * as types from './mutation-types'

export const getters: GetterTree<OneSignalState, any> = {}

export const mutations: MutationTree<any> = {
  [types.SET_IS_PERMISSION_GRANTED] (state, payload) {
    state.isPermissionGranted = payload
  },
  [types.SET_IS_REGISTERED] (state, payload) {
    state.isRegistered = payload
  }
}
