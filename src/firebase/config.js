import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgNg7jkzAWCSaEm_Mdf7kjYwvU8iOZ0eo",
    authDomain: "udemy-vue-firebase-sites-cb162.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-cb162",
    storageBucket: "udemy-vue-firebase-sites-cb162.appspot.com",
    messagingSenderId: "1087496817442",
    appId: "1:1087496817442:web:f5136bc4ab74ea1461337b"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, timestamp}
