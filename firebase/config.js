import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBigc07BGo6L6kJC60pceB9RX3bT8NGI4M",
    authDomain: "reactgame-37b61.firebaseapp.com",
    databaseURL: "https://reactgame-37b61-default-rtdb.firebaseio.com",
    projectId: "reactgame-37b61",
    storageBucket: "reactgame-37b61.appspot.com",
    messagingSenderId: "507239631514",
    appId: "1:507239631514:web:cee05b2017c04fe2866d23",
    measurementId: "G-W0ZELTJKHM"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };