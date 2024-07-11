import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg1hYaLgAiesZTS1Ef3x5aXX8hvPC_3BU",
  authDomain: "tarakan-kg.firebaseapp.com",
  projectId: "tarakan-kg",
  storageBucket: "tarakan-kg.appspot.com",
  messagingSenderId: "234865467974",
  appId: "1:234865467974:web:12a2de0272121e009e2047",
  measurementId: "G-YQPX93G3LL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
