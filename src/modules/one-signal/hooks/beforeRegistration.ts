import { mutations } from './../store/mutations';
import { Logger } from '@vue-storefront/core/lib/logger'
import * as types from '../store/mutation-types'
declare global {
  interface Window { OneSignal: any; }
}
export function beforeRegistration(Vue, config, store, isServer) {
  if (config.oneSignal.appId && !isServer) {
    Logger.info('Adding oneSignal extension')()
    if (typeof document !== 'undefined') {
      const oneSignalSDK = document.createElement('script')
      oneSignalSDK.async = true
      oneSignalSDK.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
      document.head.appendChild(oneSignalSDK)
    }
  } else {
    Logger.warn('Google Analytics extensions is not working. Ensure Google Analytics account ID is defined in config', 'GA')()
  }
}
