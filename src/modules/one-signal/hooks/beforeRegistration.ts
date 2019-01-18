import { Logger } from '@vue-storefront/core/lib/logger'
declare global {
  interface Window { OneSignal: any; }
}

export function beforeRegistration(Vue, config, store, isServer) {
  if (config.oneSignal.id && !isServer) {
    Logger.info('Adding oneSignal extension')()
    if (typeof document !== 'undefined') {
      const oneSignalSDK = document.createElement('script');
      oneSignalSDK.async = true;
      oneSignalSDK.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
      document.head.appendChild(oneSignalSDK);
    }
    if (typeof window !== 'undefined') {
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(function() {
        window.OneSignal.init({
          appId: "089787d5-7a25-4efb-9044-b71f75ad96fd",
        });
      });
    }

  } else {
    Logger.warn('Google Analytics extensions is not working. Ensure Google Analytics account ID is defined in config', 'GA')()
  }
}
