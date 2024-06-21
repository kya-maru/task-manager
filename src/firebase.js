import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnAJ7WvCzJHt-xSgGSfi5CgG9OfeydbEw",
    authDomain: "trello-app-46ed5.firebaseapp.com",
    projectId: "trello-app-46ed5",
    storageBucket: "trello-app-46ed5.appspot.com",
    messagingSenderId: "944286719683",
    appId: "1:944286719683:web:6103059ef78ea32a250c76",
    measurementId: "G-CM9Q0ZEELM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default db;
export { auth, provider };