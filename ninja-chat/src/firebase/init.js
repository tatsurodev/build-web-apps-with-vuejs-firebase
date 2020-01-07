import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzFRmBMP6BPbo4Nwd5PEKv8HQ-ZN9WmWg",
    authDomain: "udemy-ninja-chat-dfdb3.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-dfdb3.firebaseio.com",
    projectId: "udemy-ninja-chat-dfdb3",
    storageBucket: "udemy-ninja-chat-dfdb3.appspot.com",
    messagingSenderId: "65366787082",
    appId: "1:65366787082:web:6cbe9a81cdf9acc84c4bf3",
    measurementId: "G-0CZLPGNTGN"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()