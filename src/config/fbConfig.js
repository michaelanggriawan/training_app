import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCeBA_Ttw0Z0tqF_L3nrX9_1hgNsxDY70A",
    authDomain: "training-app-d2b81.firebaseapp.com",
    databaseURL: "https://training-app-d2b81.firebaseio.com",
    projectId: "training-app-d2b81",
    storageBucket: "training-app-d2b81.appspot.com",
    messagingSenderId: "984001407619",
    appId: "1:984001407619:web:09f385ca99635b25"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;