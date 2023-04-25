// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app= initializeApp ({
  apiKey: "AIzaSyDPJFxJWHqalrRh0Axo2-IrC1x6Eo1BWjE",
  authDomain: "nextproject-2d988.firebaseapp.com",
  projectId: "nextproject-2d988",
  storageBucket: "nextproject-2d988.appspot.com",
  messagingSenderId: "152353323800",
  appId: "1:152353323800:web:b47e2e05e03e7111633c6d"
});

// Initialize Firebase
const storage = getStorage(app);
export default storage;