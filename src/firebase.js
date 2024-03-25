// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8c6Ia7oC5L5_a-GmgGFtDazzq1_suq6M",
    authDomain: "clone-ec6f6.firebaseapp.com",
    projectId: "clone-ec6f6",
    storageBucket: "clone-ec6f6.appspot.com",
    messagingSenderId: "897491294996",
    appId: "1:897491294996:web:80c10e82cf120b11490001",
    measurementId: "G-TKMZGJ6CKY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth} ;