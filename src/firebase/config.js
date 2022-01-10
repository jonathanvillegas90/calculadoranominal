import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn4w4TWlR7qgZxOFdu30Tfmq1g0EcPYAo",
  authDomain: "crud-react-8122a.firebaseapp.com",
  projectId: "crud-react-8122a",
  storageBucket: "crud-react-8122a.appspot.com",
  messagingSenderId: "840245893341",
  appId: "1:840245893341:web:3d4f1906d85c11cb186334",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
