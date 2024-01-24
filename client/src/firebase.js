// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mern-a8583.firebaseapp.com",
  projectId: "mern-a8583",
  storageBucket: "mern-a8583.appspot.com",
  messagingSenderId: "499540675204",
  appId: "1:499540675204:web:636c0a2fc20de95b2fd0d1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
