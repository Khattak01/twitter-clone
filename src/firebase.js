// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZyd0umMiuCOs01ZIJV2P3oPC7bA9zUTc",
  authDomain: "react-twitter-clone-ebd1d.firebaseapp.com",
  databaseURL: "https://react-twitter-clone-ebd1d.firebaseio.com",
  projectId: "react-twitter-clone-ebd1d",
  storageBucket: "react-twitter-clone-ebd1d.appspot.com",
  messagingSenderId: "812205581405",
  appId: "1:812205581405:web:6eda228e05c38a8b5c59b4",
  measurementId: "G-NRGEL558L2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
