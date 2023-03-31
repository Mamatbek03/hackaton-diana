import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsRvggwnb-Gs1i7Idkdh9UI98x_eKJfN8",
  authDomain: "fir-16b9a.firebaseapp.com",
  projectId: "fir-16b9a",
  storageBucket: "fir-16b9a.appspot.com",
  messagingSenderId: "610322579228",
  appId: "1:610322579228:web:1846ee282cb21f884104d9",
};

const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth();

export const signWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      console.log(result);
      localStorage.setItem("register", JSON.stringify(result.user));
    })
    .catch((e) => {
      console.error(e);
    });
};
