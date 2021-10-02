import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCNteTH09picpiRYLBObXjrhO-zu7prKg4",
    authDomain: "instagram-aa2c5.firebaseapp.com",
    projectId: "instagram-aa2c5",              
    storageBucket: "instagram-aa2c5.appspot.com", 
    messagingSenderId: "201107072265",            
    appId: "1:201107072265:web:91f99bf09d8192d200dfd8",  
    measurementId: "G-KQTG9GQF65"                       
};                                    
                                                                             
const server = firebase.initializeApp(firebaseConfig)
const auth = server.auth();
const database = server.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, database, provider}; 