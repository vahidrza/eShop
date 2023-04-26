// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDdiI6Fm-2INhyrxJZLfgRGtlqAu4bEiYc",
  authDomain: "eshop-43009.firebaseapp.com",
  databaseURL: "https://eshop-43009-default-rtdb.firebaseio.com",
  projectId: "eshop-43009",
  storageBucket: "eshop-43009.appspot.com",
  messagingSenderId: "810810308963",
  appId: "1:810810308963:web:52235c503704d27b08bb56",
  measurementId: "G-2W39V65LPX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};