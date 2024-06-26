// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-48c72.firebaseapp.com",
  projectId: "mern-auth-48c72",
  storageBucket: "mern-auth-48c72.appspot.com",
  messagingSenderId: "445209524622",
  appId: "1:445209524622:web:86b9833ee051b5aab70cdf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);