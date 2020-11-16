import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2qJB_HuC8PXDResVdHd57ryqw7tnTyWk",
  authDomain: "slack-clone-47756.firebaseapp.com",
  databaseURL: "https://slack-clone-47756.firebaseio.com",
  projectId: "slack-clone-47756",
  storageBucket: "slack-clone-47756.appspot.com",
  messagingSenderId: "353919186844",
  appId: "1:353919186844:web:efb094441a0383c41dfa59",
  measurementId: "G-6GN5KF108M",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
