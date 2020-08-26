import firebase from    'firebase';
const firebaseApp= firebase.initializeApp({

    apiKey: "AIzaSyBrMRPEu1nhq08rwOIFfZ3u7bwGZxsWK3w",
    authDomain: "messenger-212c2.firebaseapp.com",
    databaseURL: "https://messenger-212c2.firebaseio.com",
    projectId: "messenger-212c2",
    storageBucket: "messenger-212c2.appspot.com",
    messagingSenderId: "249326802403",
    appId: "1:249326802403:web:df43f1d894c8858473bcd6",
    measurementId: "G-2D7Z4KW2XE"
});

 const db=firebaseApp.firestore();
export default db;  