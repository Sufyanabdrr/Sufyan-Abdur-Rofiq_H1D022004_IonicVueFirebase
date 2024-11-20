// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// modifikasi src/utils/firebase.ts
import { getFirestore } from 'firebase/firestore';
export { auth, googleProvider, db };

const firebaseConfig = {
    apiKey: "AIzaSyBzj-hvCjF9HOiquQHEv1KoNwn5OXYB3Bo",
    authDomain: "vue-firebase-6c70d.firebaseapp.com",
    projectId: "vue-firebase-6c70d",
    storageBucket: "vue-firebase-6c70d.firebasestorage.app",
    messagingSenderId: "625768184739",
    appId: "1:625768184739:web:4c636c76c987506ac27816"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);
const googleProvider = new GoogleAuthProvider();
