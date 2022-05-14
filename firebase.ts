// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpjS_o3IXdIGvuXI7dUomnpfolkELdJys",
  authDomain: "netflix-clone-acb12.firebaseapp.com",
  projectId: "netflix-clone-acb12",
  storageBucket: "netflix-clone-acb12.appspot.com",
  messagingSenderId: "177147985279",
  appId: "1:177147985279:web:a8cc78a135e4db69262e4a"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }