// const firebase = require('firebase')
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyArLR7kTRlFZUg0wb06ImQrLU19H-HlxIo",
    authDomain: "whats-app-clone-99b85.firebaseapp.com",
    databaseURL: "https://whats-app-clone-99b85.firebaseio.com",
    projectId: "whats-app-clone-99b85",
    storageBucket: "whats-app-clone-99b85.appspot.com",
    messagingSenderId: "950399060510",
    appId: "1:950399060510:web:73d85c729410f35ea03c0f",
    measurementId: "G-DHWY0LZBLG"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
