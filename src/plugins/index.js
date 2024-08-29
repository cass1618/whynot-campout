/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import { VueFire } from 'vuefire'
import { getFirestore } from 'firebase/firestore'
import { fbApp } from './firebase'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueFire, { firestore: getFirestore(fbApp) })
}
