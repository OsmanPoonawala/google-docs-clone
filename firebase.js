import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTP-QzsMUaIBXZs-RA5NY0D-15nXV5S7Y",
    authDomain: "docs-clone-636e7.firebaseapp.com",
    projectId: "docs-clone-636e7",
    storageBucket: "docs-clone-636e7.appspot.com",
    messagingSenderId: "795446742750",
    appId: "1:795446742750:web:7243e70f03ffd583c5bc4f",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };
