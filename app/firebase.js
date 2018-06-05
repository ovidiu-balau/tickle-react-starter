import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "ENTER HERE",
    authDomain: "ENTER HERE",
    databaseURL: "ENTER HERE",
    storageBucket: "ENTER HERE",
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;
