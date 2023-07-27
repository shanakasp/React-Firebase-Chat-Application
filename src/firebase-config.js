// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYrpq_N9xLXdqx1u7a4dcYw5829g6UGU4",
  authDomain: "react-chat-app-a1895.firebaseapp.com",
  projectId: "react-chat-app-a1895",
  storageBucket: "react-chat-app-a1895.appspot.com",
  messagingSenderId: "16929318379",
  appId: "1:16929318379:web:40a0da91bb8064bfdbe5ae",
  measurementId: "G-WT80F05Z4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();