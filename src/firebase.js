import firebase from "firebase/app"
import "firebase/auth"
const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyCEooL7e0xKwT8S2wRUmuFpq8ajExTCIJ8",
    authDomain: "auth-development-d2518.firebaseapp.com",
    databaseURL: "https://auth-development-d2518-default-rtdb.firebaseio.com",
    projectId: "auth-development-d2518",
    storageBucket: "auth-development-d2518.appspot.com",
    messagingSenderId: "169822579663",
    appId: "1:169822579663:web:b18e9251f3acbe95a640ba"
})

export const auth = app.auth()
export default app