import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAu9KQKkxyWT66nCEepjJjDmTyzK04N5G0",
    authDomain: "macagutumeals.firebaseapp.com",
    projectId: "macagutumeals",
    storageBucket: "macagutumeals.firebasestorage.app",
    messagingSenderId: "397904268460",
    appId: "1:397904268460:web:cddddf090a840e0f6aa309"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };