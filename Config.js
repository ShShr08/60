import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmmKXkXuSqMKMTSb0yqEdiDhIocLTtIO4",
    authDomain: "project-8432095236268572714.firebaseapp.com",
    databaseURL: "https://project-8432095236268572714-default-rtdb.firebaseio.com",
    projectId: "project-8432095236268572714",
    storageBucket: "project-8432095236268572714.appspot.com",
    messagingSenderId: "61164864230",
    appId: "1:61164864230:web:5bb7f1773028c3021af127"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.database();