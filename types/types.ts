import type { Timestamp } from "firebase/firestore";

export type CarType = {
  id: string;
  name: string;
  color: string;
  manufactureYear: Timestamp;
  price: number;
  city: string
  owner: UserType;
};

export type UserType = {
  id: string;
  name: string;
  age: number;
  address: string;
};
