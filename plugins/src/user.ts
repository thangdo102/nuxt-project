import {
  doc,
  getDoc,
  onSnapshot,
  collection,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import { firestore } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const getUser = async (uid) => {
  const userDoc = await getDoc(doc(firestore, "users", uid));
  const userData = userDoc.data();
  return {
    id: userDoc.id,
    ...userData,
  };
};

export const createUser = async () => {
  const usersCollectionRef = collection(firestore, "users");
  const docRef = await addDoc(usersCollectionRef, data);
};


