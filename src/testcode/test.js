import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('QJ0YiCIvHfvqFHOi8eGc').collection('cartItems').doc('3jOk6mLa7ABGUblVgQdI');

firestore.doc('users/QJ0YiCIvHfvqFHOi8eGc/cartItems/3jOk6mLa7ABGUblVgQdI');
//the above both lines are equal

//to get all the collection from a DB
firestore.collection('users/QJ0YiCIvHfvqFHOi8eGc/cartItems');



