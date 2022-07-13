import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBleaBpmqw7gYyZlNpVhg0BHlJN_rtzePY",
    authDomain: "finance-tracker-eb24f.firebaseapp.com",
    projectId: "finance-tracker-eb24f",
    storageBucket: "finance-tracker-eb24f.appspot.com",
    messagingSenderId: "201470410669",
    appId: "1:201470410669:web:61f21e9b6f67a6c00cab24"
 }

 firebase.initializeApp(firebaseConfig)

 const projectFirestore = firebase.firestore()
 const projectAuth = firebase.auth()

 const timestamp = firebase.firestore.Timestamp

 export { projectFirestore, projectAuth, timestamp }