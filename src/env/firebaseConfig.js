// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBCnXW2HyP9dXW-7uiPX4M5eFlz3Fid9tk",
  authDomain: "dasuzou-c609a.firebaseapp.com",
  projectId: "dasuzou-c609a",
  storageBucket: "dasuzou-c609a.appspot.com",
  messagingSenderId: "542754018651",
  appId: "1:542754018651:web:6b33146f53db04ce9af67e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);