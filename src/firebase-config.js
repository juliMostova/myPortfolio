import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDojXBFATuoNWuL2iV0quxVwL3LyaSpUck",
    authDomain: "atentificationportfolio.firebaseapp.com",
    projectId: "atentificationportfolio",
    storageBucket: "atentificationportfolio.firebasestorage.app",
    messagingSenderId: "591676390710",
    appId: "1:591676390710:web:37b44be9de4ebb70530797"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);