import { Module } from 'vuex'
import { actions } from './actions'
import RootState from '@vue-storefront/store/types/RootState'
import { OneSignalState } from '../types'

const initialState: OneSignalState = {
  isPermissionGranted: null,
  isSubscribed: null,
}

export const module: Module<OneSignalState, RootState> = {
  namespaced: true,
  state: initialState,
  actions
}

