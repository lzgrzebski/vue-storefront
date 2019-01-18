import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
import { beforeRegistration } from './hooks/beforeRegistration'

export const KEY = 'one-signal'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  beforeRegistration
}

export const OneSignal = new VueStorefrontModule(moduleConfig)
