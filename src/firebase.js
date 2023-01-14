// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrQYCW7Z1frQNnoXwP3ZaxPgcy5UbhI7k",
  authDomain: "twitter-clone-89b98.firebaseapp.com",
  projectId: "twitter-clone-89b98",
  storageBucket: "twitter-clone-89b98.appspot.com",
  messagingSenderId: "722555054413",
  appId: "1:722555054413:web:8ad191b3f1499ff2f5ef04",
  measurementId: "G-XCJ12MMKVZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
