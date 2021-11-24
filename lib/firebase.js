import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6dC8WPKbNYlMMhsZ0q8jokOFwb-y8Uuw",
  authDomain: "dev-to-api.firebaseapp.com",
  // databaseURL: "https://dev-to-api-default-rtdb.firebaseio.com",
  projectId: "dev-to-api",
  storageBucket: "dev-to-api.appspot.com",
  messagingSenderId: "1021105091131",
  appId: "1:1021105091131:web:73cd6ec41d39bf7e7a221e",
  // measurementId: "G-4C2G3DDYD7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

/// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;
