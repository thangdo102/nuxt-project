import {
  collection,
  addDoc,
  query,
  getDocs,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { firestore } from "./firebase";
import type { Car } from "~/types/types";

export const addNewCar = async (car: Car) => {
  const carRef = collection(firestore, "cars");
  const res = await addDoc(carRef, car);
  return res.id;
};

export const getCars = async () => {
  const carRef = collection(firestore, "cars");
  const q = query(carRef);
  return (await getDocs(q)).docs.map((data) => {
    if (data.exists()) return { id: data.id, ...data.data() };
    else return [];
  });
};

export const getCarDetail = async (carId) => {
  const carRef = doc(firestore, "cars", carId);
  const carSnap = await getDoc(carRef);
  if (carSnap.exists()) {
    return carSnap.data();
  } else {
    return null;
  }
};
