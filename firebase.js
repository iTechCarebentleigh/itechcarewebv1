// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvxYBfhx0ebDWDyCM9-Z94CtLSoyb6bfA",
  authDomain: "itech-care-website.firebaseapp.com",
  databaseURL: "https://itech-care-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "itech-care-website",
  storageBucket: "itech-care-website.appspot.com",
  messagingSenderId: "844498163923",
  appId: "1:844498163923:web:bd03b24286b82351c35c26",
  measurementId: "G-QKQ2H5ED02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app)