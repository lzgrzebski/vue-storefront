import { OneSignalState } from '../types'
import { ActionTree } from 'vuex'

export const actions: ActionTree<OneSignalState, any> = {
  register ({ commit, state}) {
    window.OneSignal.registerForPushNotifications();
  },
  unregister ({ commit, state}) {
    window.OneSignal.setSubscription(false);
  }
}
