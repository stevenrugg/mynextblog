// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8MRVTMkNXCen3ZFhZ7s4_2PwTH6ThyNI",
  authDomain: "seattlesupergeek-ddc7e.firebaseapp.com",
  projectId: "seattlesupergeek-ddc7e",
  storageBucket: "seattlesupergeek-ddc7e.firebasestorage.app",
  messagingSenderId: "128083476438",
  appId: "1:128083476438:web:29ec7eabfedac91bae2e77",
  measurementId: "G-K49DFHNXQG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const githubProvider = new GithubAuthProvider();