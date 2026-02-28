import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your exact Firebase keys
const firebaseConfig = {
  apiKey: "AIzaSyCpC-OsthPLkEnZNIY_hOqsLBuzI2bSSMo",
  authDomain: "sneha-associates-db.firebaseapp.com",
  projectId: "sneha-associates-db",
  storageBucket: "sneha-associates-db.firebasestorage.app",
  messagingSenderId: "954300250766",
  appId: "1:954300250766:web:fc0623a12623c0510227df",
  measurementId: "G-ZRQERV2BG5"
};

// Initialize Firebase (The check prevents Next.js hot-reload errors)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };