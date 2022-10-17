import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBju06yKhYlouJGF9xbZ1za05BkMzx5hZw",
  authDomain: "ultra-foundation.firebaseapp.com",
  projectId: "ultra-foundation",
  storageBucket: "ultra-foundation.appspot.com",
  messagingSenderId: "905900119894",
  appId: "1:905900119894:web:334a7377cb33ba689928f7",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider };
