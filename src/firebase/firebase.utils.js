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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth)
    {
      console.log("user not authenticated");
      return;
    }

    // console.log(userAuth.uid);
    //console.log(firestore.doc('users/123456789'));
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // console.log(snapShot);
    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;

      const createdAt = new Date();

      try{
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
      }
      catch(error)
      {
        console.log("Error creating user", + error.message);
      }
    }

    return userRef;
    }
     
  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;