import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBmx3k3Fn9-2uF2rFmmE7TeAvRdnBmcqHw",
  authDomain: "bingo-card-generator-7335a.firebaseapp.com",
  projectId: "bingo-card-generator-7335a",
  storageBucket: "bingo-card-generator-7335a.appspot.com",
  messagingSenderId: "307692627485",
  appId: "1:307692627485:web:29128c71c307033f3c88f4"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
