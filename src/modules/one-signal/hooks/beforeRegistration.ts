import { Logger } from '@vue-storefront/core/lib/logger'
export function beforeRegistration(Vue, config, store, isServer) {
  if (config.oneSignal.id && !isServer) {
    Logger.info('One-signal integration ready to develop')
  } else {
    Logger.warn('Google Analytics extensions is not working. Ensure Google Analytics account ID is defined in config', 'GA')()
  }
}
