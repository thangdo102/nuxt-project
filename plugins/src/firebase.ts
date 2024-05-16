import { initializeApp } from "firebase/app";
import { DocumentSnapshot, getFirestore } from "firebase/firestore"; // You can import other Firebase services as needed
import { getAuth } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUdnF3qNkdN7D7w7y2oSmqQiPHcLx5UwI",
  authDomain: "nuxt-car.firebaseapp.com",
  projectId: "nuxt-car",
  storageBucket: "nuxt-car.appspot.com",
  messagingSenderId: "681017992471",
  appId: "1:681017992471:web:c0396b4ec9acca67688352",
  measurementId: "G-9EVMGWCX09",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);

export const storage = getStorage();

export const uploadCarImages = async (file: File, carId: string) => {
  const user = await getCurrentUser();
  if (!user) {
    throw "Cloud storage, User auth required";
  }

  if (!["image/jpg", "image/png", "image/gif"].indexOf(file.type)) {
    throw "car image should be jpg, png or gif";
  }
  const ext = file.type.replace("image/", ".");
  const storageRef = ref(storage, `cars/${carId}/car_images/${carId}${ext}`);

  const metadata = {
    contentType: file.type,
  };

  const snapShotRef = await uploadBytes(storageRef, file, metadata).then(
    (snapshot) => {
      return snapshot;
    }
  );

  const downloadURL = await getDownloadURL(snapShotRef.ref);
  return downloadURL;
};

export const getCurrentUser = (): Promise<any> => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      if (user) resolve(user);
      else resolve(null);
    });
  });
};
