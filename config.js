import firebase from 'firebase'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyChSuI6ACZXKb-Lw14nwk-pGng0m6NMtjU",
    authDomain: "newsletter-f2418.firebaseapp.com",
    databaseURL: "https://newsletter-f2418-default-rtdb.firebaseio.com",
    projectId: "newsletter-f2418",
    storageBucket: "newsletter-f2418.appspot.com",
    messagingSenderId: "757235887890",
    appId: "1:757235887890:web:d10f71e5a395b400c48dcb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()