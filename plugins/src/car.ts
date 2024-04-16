import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";
import type { CarType } from "~/types/types";

export const getCities = async () => {
  const citiesRef = collection(firestore, "cities");
  const q = query(citiesRef);
  return (await getDocs(q)).docs.map((data) => data.data());
};

export const addNewCar = async (car: CarType) => {
  const carRef = collection(firestore, "cars");
  const res = await addDoc(carRef, car);
  return res.id
};
