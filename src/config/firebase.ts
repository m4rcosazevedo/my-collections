import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { settings } from './settings'

const firebaseConfig = {
  apiKey: settings.FIREBASE_API_KEY,
  projectId: settings.FIREBASE_PROJECT_ID,
  authDomain: `${settings.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  storageBucket: `${settings.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: settings.FIREBASE_MESSAGING_SENDER_ID,
  appId: settings.FIREBASE_APP_ID,
  measurementId: settings.MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { analytics, auth, db, storage }
