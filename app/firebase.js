import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBkcJ-VnMYi4zwucumHACQlmWO58MUBVbY",
    authDomain: "beacn-292bc.firebaseapp.com",
    databaseURL: "https://beacn-292bc.firebaseio.com",
    storageBucket: "beacn-292bc.appspot.com",
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;