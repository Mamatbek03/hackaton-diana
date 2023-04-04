// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsRvggwnb-Gs1i7Idkdh9UI98x_eKJfN8",
  authDomain: "fir-16b9a.firebaseapp.com",
  projectId: "fir-16b9a",
  storageBucket: "fir-16b9a.appspot.com",
  messagingSenderId: "610322579228",
  appId: "1:610322579228:web:1846ee282cb21f884104d9",
};

// const app = initializeApp(firebaseConfig);
const fire = firebase.initializeApp(firebaseConfig);

// export default app;
export default fire;
