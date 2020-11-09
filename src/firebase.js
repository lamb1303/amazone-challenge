import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBrjCasVcCJmCFK2qEGtAUXzhBPx65iN_U",
    authDomain: "challenge-aa8d6.firebaseapp.com",
    databaseURL: "https://challenge-aa8d6.firebaseio.com",
    projectId: "challenge-aa8d6",
    storageBucket: "challenge-aa8d6.appspot.com",
    messagingSenderId: "291491273392",
    appId: "1:291491273392:web:d5253c71ee3c4abbdc3975"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }