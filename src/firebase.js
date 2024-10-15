
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbacjOC8nZu57hLW7MUoXciur6oNibkIM",
  authDomain: "chandaanportfolio.firebaseapp.com",
  projectId: "chandaanportfolio",
  storageBucket: "chandaanportfolio.appspot.com",
  messagingSenderId: "710225323559",
  appId: "1:710225323559:web:0b26e66b9a0aed3f739002",
  measurementId: "G-8EJMN4VYDN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
