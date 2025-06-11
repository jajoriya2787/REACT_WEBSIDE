// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfbPOCIc6xe1v79tyZCOsUOXjdR5A1UpU",
  authDomain: "productlistingdata-e9ed7.firebaseapp.com",
  projectId: "productlistingdata-e9ed7",
  storageBucket: "productlistingdata-e9ed7.firebasestorage.app",
  messagingSenderId: "174010531660",
  appId: "1:174010531660:web:3d4198853a8fab9b8fd9e9",
  measurementId: "G-9DB9TE26C8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);