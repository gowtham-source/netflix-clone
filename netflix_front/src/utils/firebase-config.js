import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDqEl97LAxV5KGNDCbBRkfiSix3dAxkRaE",
  authDomain: "react-netlify-45a81.firebaseapp.com",
  projectId: "react-netlify-45a81",
  storageBucket: "react-netlify-45a81.appspot.com",
  messagingSenderId: "961143748354",
  appId: "1:961143748354:web:283cfb5ab86ad5f04bf41b",
  measurementId: "G-DRE41MLS0D",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
