// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

//Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy9K9V9tMRsKMZ73dOIRiwquM-vyC1nVI",
  authDomain: "registration-78709.firebaseapp.com",
  projectId: "registration-78709",
  storageBucket: "registration-78709.appspot.com",
  messagingSenderId: "207657631029",
  appId: "1:207657631029:web:69e4917cfa98907590a07c",
  measurementId: "G-ZP11HRQ82R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const app=initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider =new GoogleAuthProvider()
export { firebase, firestore , auth,provider};















