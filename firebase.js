import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLFwqDkTKZm6UWgTU2FXINzwXtVvWwcBA",
  authDomain: "popreel-tiktok.firebaseapp.com",
  projectId: "popreel-tiktok",
  storageBucket: "popreel-tiktok.firebasestorage.app",
  messagingSenderId: "418247558154",
  appId: "1:418247558154:web:3cfb5fda01b617ed0a0bf3",
  measurementId: "G-EPGYCT1Q8X"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;