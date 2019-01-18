import { OneSignalState } from '../types'
import { ActionTree } from 'vuex'

export const actions: ActionTree<OneSignalState, any> = {
  subscribe ({ commit, state}) {
    console.log(state.isPermissionGranted);
  }
}
