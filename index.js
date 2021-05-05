/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('LOCAL NOTIFICATION ==>', notification);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // This line solves the problem that I was facing.
  popInitialNotification: true,
  requestPermissions: false,
});
AppRegistry.registerComponent(appName, () => App);
