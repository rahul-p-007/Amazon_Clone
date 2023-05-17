import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASZl8a64Vx_8nlIixyk9tGdqHfHO4rPbg",
  authDomain: "clone-78775.firebaseapp.com",
  projectId: "clone-78775",
  storageBucket: "clone-78775.appspot.com",
  messagingSenderId: "1088931327309",
  appId: "1:1088931327309:web:a97a372d6e8a4eb9771b04",
  measurementId: "G-M4RXZBBBEH",
};
// Use this to initialize the firebase App
//connect frontend to backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db
const db = firebaseApp.firestore();
//Authinaction
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//Difference between both of them
export { auth, provider };

//import {auth,provider} from "./firebase"
export default db;
// import db from './firebase'
