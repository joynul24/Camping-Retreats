// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRLd7mYKSAMDJMm9zXXr1ImVDwMcjLa_0",
  authDomain: "assignment-09-99dc0.firebaseapp.com",
  projectId: "assignment-09-99dc0",
  storageBucket: "assignment-09-99dc0.firebasestorage.app",
  messagingSenderId: "681363004971",
  appId: "1:681363004971:web:ed890d5f76c4b66251546e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)