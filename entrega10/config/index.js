const config = require("../config");
const {initializeApp} = require("firebase/app");
const admin = require("firebase-admin"); 
const serviceAccount = config.firebase;
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://backendcoder-c3140-default-rtdb.firebaseio.com/",
}); 

const db = admin.firestore();

module.exports = db;






// Import the functions you need from the SDKs you need
/* const  { initializeApp } = require("firebase/app"); */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyChRsO6_aWuo5RPD5n5FK1oA56u8fjDJQE",
  authDomain: "backendcoder-c3140.firebaseapp.com",
  projectId: "backendcoder-c3140",
  storageBucket: "backendcoder-c3140.appspot.com",
  messagingSenderId: "84517625266",
  appId: "1:84517625266:web:3bdcb854a0731ce35718ab"
};
 */
// Initialize Firebase
/* const db = initializeApp(firebaseConfig); */