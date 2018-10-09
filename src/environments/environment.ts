// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfiguration: {
    apiKey: 'AIzaSyAvm9y6_gedQZnwXbjkF0tyCXk0lc7JRTw',
    authDomain: 'drivenapp-fb9e8.firebaseapp.com',
    databaseURL: 'https://drivenapp-fb9e8.firebaseio.com',
    projectId: 'drivenapp-fb9e8',
    storageBucket: 'drivenapp-fb9e8.appspot.com',
    messagingSenderId: '302603195882'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
