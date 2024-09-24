// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-NxfW4Gxz0A18o3uH4zvP1LWEJS8BZtA",
  authDomain: "beproj-ccb7d.firebaseapp.com",
  projectId: "beproj-ccb7d",
  storageBucket: "beproj-ccb7d.appspot.com",
  messagingSenderId: "963189643157",
  appId: "1:963189643157:web:52624f919f4b197222889c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);