// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCekB2HBzaSqYZtbiZOG6GHHYnPy31W7UU",
  authDomain: "cprg306-assignments-42aeb.firebaseapp.com",
  projectId: "cprg306-assignments-42aeb",
  storageBucket: "cprg306-assignments-42aeb.appspot.com",
  messagingSenderId: "382716648803",
  appId: "1:382716648803:web:f25a665473779c7b038756",
  measurementId: "G-16P021EJCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);