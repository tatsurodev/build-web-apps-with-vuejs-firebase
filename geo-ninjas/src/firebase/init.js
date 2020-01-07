import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAb11qYSfuBsIPSBw3FoQslu_zPYvKky7w",
    authDomain: "udemy-geo-ninjas-568a7.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-568a7.firebaseio.com",
    projectId: "udemy-geo-ninjas-568a7",
    storageBucket: "udemy-geo-ninjas-568a7.appspot.com",
    messagingSenderId: "756744053421",
    appId: "1:756744053421:web:2668d17bcdc505d21d1c24",
    measurementId: "G-QX0L370VYF"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()