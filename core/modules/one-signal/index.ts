import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'

export const KEY = 'one-signal'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY
}

export const OneSignal = new VueStorefrontModule(moduleConfig)
