// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpwS2AfNt2OheY57-oTQkef_PJ_wVC3Vo",
  authDomain: "deals-server-tenth.firebaseapp.com",
  projectId: "deals-server-tenth",
  storageBucket: "deals-server-tenth.firebasestorage.app",
  messagingSenderId: "549989332112",
  appId: "1:549989332112:web:76e40865ab8c9c92fbd415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);