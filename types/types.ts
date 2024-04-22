import type { Timestamp } from "firebase/firestore";

export type CarType = "Số tự động" | "Số sàn";
export type ReceiveType = "Giao tận nơi" | "Tự lấy";
export type FuelType = "Điện" | "Xăng";

export type Car = {
  name: string;
  color: string;
  manufactureYear: string;
  pricePerDay: number | null;
  city: string;
  owner: User;
  type: CarType | null;
  receiveType: ReceiveType | null;
  images: Array<string>;
  seat: number;
  fuel: FuelType;
  wastedFuel: number;
  introduction: string
  convenient: Array<string>
};

export type User = {
  id: string;
  name: string;
  address: string;
};
