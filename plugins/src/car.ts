import {
  collection,
  addDoc,
  query,
  getDocs,
  where,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore, getCurrentUser } from "./firebase";
import type { Car, RentalCar } from "~/types/types";

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

export const getCarDetail = async (carId?): Promise<any> => {
  const carRef = doc(firestore, "cars", carId);
  const carSnap = await getDoc(carRef);
  if (carSnap.exists()) {
    return carSnap.data();
  } else {
    return null;
  }
};

export const getMyCarList = async (userId) => {
  const carRef = collection(firestore, "cars");
  const q = query(carRef, where("owner.id", "==", userId));
  return (await getDocs(q)).docs.map((data) => {
    if (data.exists()) return { id: data.id, ...data.data() };
    else return [];
  });
};

export const updateCar = async (carId, newUpdate): Promise<any> => {
  const carRef = doc(firestore, "cars", carId);
  return await updateDoc(carRef, newUpdate);
};

export const deleteCar = async (carId: string) => {
  const carRef = doc(firestore, "cars", carId);
  return await deleteDoc(carRef);
};

export const rentCar = async (carInfo: RentalCar) => {
  const rentalListRef = collection(firestore, "rentalList");
  const res = await addDoc(rentalListRef, carInfo);
  return res.id
};
