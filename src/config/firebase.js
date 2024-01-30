// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwCGs6TzjwQmOULqBTbHoGQ2m_kZ2VU6Y",
  authDomain: "portfolio-5ed5a.firebaseapp.com",
  projectId: "portfolio-5ed5a",
  storageBucket: "portfolio-5ed5a.appspot.com",
  messagingSenderId: "746004058161",
  appId: "1:746004058161:web:0651f7864b8818e6988510",
  measurementId: "G-2YX34B458V"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();