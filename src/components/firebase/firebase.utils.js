import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAi6O0hkkrIZTDz72BI8Ylsv30nc8yz2UU",
    authDomain: "crwn-db-50e8a.firebaseapp.com",
    projectId: "crwn-db-50e8a",
    storageBucket: "crwn-db-50e8a.appspot.com",
    messagingSenderId: "13589695571",
    appId: "1:13589695571:web:e830c55044206dbb7f8aa6",
    measurementId: "G-N6HEFSZWFN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;