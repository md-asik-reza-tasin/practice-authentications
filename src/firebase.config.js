// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtxuH3FLqXECuwCFGsxmq0-JtBI-5-XU8",
  authDomain: "simple-authentication-db6bd.firebaseapp.com",
  projectId: "simple-authentication-db6bd",
  storageBucket: "simple-authentication-db6bd.firebasestorage.app",
  messagingSenderId: "303636579680",
  appId: "1:303636579680:web:ae00913a3b95562f350a05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;