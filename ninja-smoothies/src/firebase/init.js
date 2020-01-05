import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtZc9QAFOKmcR4F01NQKUdJTihyrgQB9k",
    authDomain: "udemy-ninja-smoothies-2c2e2.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-2c2e2.firebaseio.com",
    projectId: "udemy-ninja-smoothies-2c2e2",
    storageBucket: "udemy-ninja-smoothies-2c2e2.appspot.com",
    messagingSenderId: "547618799931",
    appId: "1:547618799931:web:d9685a91737a083f3e371e",
    measurementId: "G-4V4XC3RK9H"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore()