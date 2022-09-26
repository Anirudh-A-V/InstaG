// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from 'firebase/ compat/app';
import { getFirestore, serverTimestamp, FieldValue } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// import 'firebase/storage'
// import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMCf83urcE8OEUB1OmQojgpkAmuaawjCg",
  authDomain: "installery-2002911.firebaseapp.com",
  projectId: "installery-2002911",
  storageBucket: "installery-2002911.appspot.com",
  messagingSenderId: "7364518265",
  appId: "1:7364518265:web:384bfeb06d106192dd4fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
const projectFirestore= getFirestore(app);
const projectStorage = getStorage(app);
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };