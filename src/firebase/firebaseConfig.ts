import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyByMR3jz_afXmsiuk0wrZA_Pu1MXn1VBk4",
  authDomain: "ditravel-45d82.firebaseapp.com",
  projectId: "ditravel-45d82",
  storageBucket: "ditravel-45d82.appspot.com",
  messagingSenderId: "394398847442",
  appId: "1:394398847442:web:9138ab16cd489e1c11780b",
  measurementId: "G-MDXFFTT26Y",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
