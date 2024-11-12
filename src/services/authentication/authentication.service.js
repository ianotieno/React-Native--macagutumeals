
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};