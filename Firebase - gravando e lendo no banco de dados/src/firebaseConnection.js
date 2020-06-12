import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBOWM4nM4CVTVC3O184ilfOdCa7GHfi_ag",
    authDomain: "meuapp-f8564.firebaseapp.com",
    databaseURL: "https://meuapp-f8564.firebaseio.com",
    projectId: "meuapp-f8564",
    storageBucket: "meuapp-f8564.appspot.com",
    messagingSenderId: "702486769236",
    appId: "1:702486769236:web:33187844dbb572459ac7c1",
    measurementId: "G-WMH5D11YDS"
  };
  // Initialize Firebase

  if(!firebase.apps.length){
      //abrir conexão
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;