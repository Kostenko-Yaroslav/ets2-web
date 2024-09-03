// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHFw24Anp0T8cwuVgHESKQD7rWk6jb9pQ",
  authDomain: "ets2-d5cee.firebaseapp.com",
  projectId: "ets2-d5cee",
  storageBucket: "ets2-d5cee.appspot.com",
  messagingSenderId: "830365918899",
  appId: "1:830365918899:web:0037649ccfa0e8b76ef2c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
