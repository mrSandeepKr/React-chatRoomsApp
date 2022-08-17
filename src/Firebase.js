import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyApdYef7kEVhXpnTsQe_FG8DseeQoRpEnw",
  authDomain: "whatsapp-clone-29fdf.firebaseapp.com",
  projectId: "whatsapp-clone-29fdf",
  storageBucket: "whatsapp-clone-29fdf.appspot.com",
  messagingSenderId: "776451896851",
  appId: "1:776451896851:web:08399cb109e3aef601f1e6",
  measurementId: "G-B3BTCN0TH2"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}
export default database