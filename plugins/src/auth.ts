import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  type UserCredential,
  signOut,
  getAuth,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "~/plugins/src/firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
};

export const signUpWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((err) => {
      if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
        console.log("The password is too weak");
      } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
        console.log("The email address is already in use");
      } else {
        console.log(err.code);
        alert(err.code);
      }
    });
};

export const logout = async () => {
  await auth.signOut();
};

export const loginWithGoole = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      localStorage.setItem("access-token", token);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
