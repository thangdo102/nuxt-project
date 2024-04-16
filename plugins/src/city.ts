import {
  doc,
  getDoc,
  onSnapshot,
  collection,
  getFirestore,
  addDoc,
  query,
  where,
  getDocs,
  and,
  or,
} from "firebase/firestore";
import { firestore } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const getCities = async () => {
  const citiesRef = collection(firestore, "cities");
  const q = query(citiesRef);
  return (await getDocs(q)).docs.map((data) => data.data());
};

export const getSpecificCity = async (state: string) => {
  const cityRef = doc(firestore, "cities", state);
  const docSnap = await getDoc(cityRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
