// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1eae6.firebaseapp.com",
  projectId: "mern-blog-1eae6",
  storageBucket: "mern-blog-1eae6.appspot.com",
  messagingSenderId: "178808582564",
  appId: "1:178808582564:web:b595cfa771380d2b675131"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);