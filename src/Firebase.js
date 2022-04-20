import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEh_BX9Ff6d9zLORjN_-OvRde-NXdcTh4",
  authDomain: "slak-clone-4f81c.firebaseapp.com",
  projectId: "slak-clone-4f81c",
  storageBucket: "slak-clone-4f81c.appspot.com",
  messagingSenderId: "1001418793067",
  appId: "1:1001418793067:web:766110fc7f3c4b5ef2912e",
  measurementId: "G-XDSDT0T802",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
