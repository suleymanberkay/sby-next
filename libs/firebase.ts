// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ratf3JyEi1uTB8bzXa6XFKCWDiyhfJU",
  authDomain: "sby-next-85a65.firebaseapp.com",
  projectId: "sby-next-85a65",
  storageBucket: "sby-next-85a65.firebasestorage.app",
  messagingSenderId: "733596035715",
  appId: "1:733596035715:web:70b63aff8c2d75bbb049b6",
  measurementId: "G-V269W3RE6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default  app ;
