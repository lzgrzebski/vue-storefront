import * as types from '../store/mutation-types'

declare global {
  interface Window { OneSignal: any; }
}

const isPermissionGranted = () => {
  if (!('Notification' in window)) return false
  return Notification.permission === 'granted'
};

export function afterRegistration(Vue, config, store, isServer) {
  if (config.oneSignal.appId && !isServer) {
    if (typeof window !== 'undefined') {
      store.commit(`one-signal/${types.SET_IS_PERMISSION_GRANTED}`, isPermissionGranted());
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(() => {
        window.OneSignal.init(config.oneSignal)
        store.dispatch('one-signal/register')
        window.OneSignal.isPushNotificationsEnabled((isEnabled) => {
          console.log(isEnabled);
        });
        window.OneSignal.on('subscriptionChange', (isSubscribed) => {
          store.commit(`one-signal/${types.SET_IS_REGISTERED}`, isSubscribed)
        });
      });

    }

  }
}
