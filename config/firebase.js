import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, onSnapshot, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyBjP7PMhXpPXEzDIWPDnUjwW9OoXr2jcbA",
  authDomain: "pineapple-abbe1.firebaseapp.com",
  projectId: "pineapple-abbe1",
  storageBucket: "pineapple-abbe1.appspot.com",
  messagingSenderId: "96537123115",
  appId: "1:96537123115:web:4b28e9e63dd9983ea78d6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();





console.log(app.name? 'Firebasse mode activated': 'firebase not working')



export { auth, db };