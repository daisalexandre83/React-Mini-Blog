// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrX_hSFKMghCDG-BgwmKw4OL-oL63fhg0",
  authDomain: "miniblog-cc523.firebaseapp.com",
  projectId: "miniblog-cc523",
  storageBucket: "miniblog-cc523.appspot.com",
  messagingSenderId: "682389123120",
  appId: "1:682389123120:web:4e22db8570659a8c7a3df5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};