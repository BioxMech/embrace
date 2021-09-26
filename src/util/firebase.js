// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEY }`,
  authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
  projectId: "ignite-83122",
  storageBucket: "ignite-83122.appspot.com",
  messagingSenderId: "987348192113",
  appId: "1:987348192113:web:56de76a966683ac5fe84d0",
  measurementId: "G-Q4VGRZW1ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export { app, analytics, db } 

