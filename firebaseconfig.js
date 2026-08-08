// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl9d4JPEvC2hqcPbGUY6y8ubUuRXBNQH4",
  authDomain: "beatcella.firebaseapp.com",
  projectId: "beatcella",
  storageBucket: "beatcella.firebasestorage.app",
  messagingSenderId: "961637418357",
  appId: "1:961637418357:web:cf0a4cf9ff63604746bf3c",
  measurementId: "G-9M76PGPV3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);