// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS8Eek2OmCgVQvMCJs-nWLoBsgWCinH_c",
  authDomain: "proyecto-integrador-e8829.firebaseapp.com",
  projectId: "proyecto-integrador-e8829",
  storageBucket: "proyecto-integrador-e8829.appspot.com",
  messagingSenderId: "971109374348",
  appId: "1:971109374348:web:6edd60753840a7a71b5ea9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;