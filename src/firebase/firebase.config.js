import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHOycBShHmUnaqfyudkBRfACO5OKfRxj8",
  authDomain: "dns-manager-f39da.firebaseapp.com",
  projectId: "dns-manager-f39da",
  storageBucket: "dns-manager-f39da.appspot.com",
  messagingSenderId: "299880207113",
  appId: "1:299880207113:web:ce56de5f154e16cf6079d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
