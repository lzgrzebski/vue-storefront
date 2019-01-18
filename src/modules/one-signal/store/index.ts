import { Module } from 'vuex'
import { actions } from './actions'
import  { mutations} from './mutations'
import RootState from '@vue-storefront/store/types/RootState'
import { OneSignalState } from '../types'

const initialState: OneSignalState = {
  isPermissionGranted: false,
  isRegistered: false,
}

export const module: Module<OneSignalState, RootState> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations
}

