import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnqt60iLw9jrqT8joxycfW9SNI_d-7ZWg",
  authDomain: "gathertest-c692e.firebaseapp.com",
  databaseURL: "https://gathertest-c692e.firebaseio.com",
  projectId: "gathertest-c692e",
  storageBucket: "gathertest-c692e.appspot.com",
  messagingSenderId: "648935776885",
  appId: "1:648935776885:web:f77938703ecb0e1f7f4e3c"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
