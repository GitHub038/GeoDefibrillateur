import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const apiKey = process.env.VITE_REACT_PUBLIC_FIREBASE_API_KEY
const projectId = process.env.VITE_REACT_APP_FIREBASE_PROJECT_ID
const messagingSenderId =
  process.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.VITE_REACT_APP_FIREBASE_APP_ID
const measurementId = process.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}-default-rtdb.europe-west1.firebasedatabase.app`,
  projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId,
  appId,
  measurementId,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)
