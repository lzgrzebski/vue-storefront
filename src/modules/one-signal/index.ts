import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'
import { beforeRegistration } from './hooks/beforeRegistration'
import { afterRegistration } from './hooks/afterRegistration'
import { module } from './store'

export const KEY = 'one-signal'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  beforeRegistration,
  afterRegistration,
  store: { modules: [{ key: KEY, module }] }
}

export const OneSignal = new VueStorefrontModule(moduleConfig)
