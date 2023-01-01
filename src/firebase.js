import React from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAPkTlXqy-SiniA-z0fui4fnc5L2dGWSoY",
  authDomain: "linkedin-clone-5fe05.firebaseapp.com",
  projectId: "linkedin-clone-5fe05",
  storageBucket: "linkedin-clone-5fe05.appspot.com",
  messagingSenderId: "1036418285474",
  appId: "1:1036418285474:web:2bc4fdc6fa201ee9e5fcfb"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore();
const auth = getAuth();

export {db, auth, firebaseApp, provider}