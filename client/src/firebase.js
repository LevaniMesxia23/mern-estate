// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ae027.firebaseapp.com",
  projectId: "mern-estate-ae027",
  storageBucket: "mern-estate-ae027.appspot.com",
  messagingSenderId: "782731179063",
  appId: "1:782731179063:web:5c37a7730b13bbd6e3fbb2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);