// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApdYef7kEVhXpnTsQe_FG8DseeQoRpEnw",
  authDomain: "whatsapp-clone-29fdf.firebaseapp.com",
  projectId: "whatsapp-clone-29fdf",
  storageBucket: "whatsapp-clone-29fdf.appspot.com",
  messagingSenderId: "776451896851",
  appId: "1:776451896851:web:08399cb109e3aef601f1e6",
  measurementId: "G-B3BTCN0TH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);