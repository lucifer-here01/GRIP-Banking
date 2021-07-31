import  firebase from "firebase";

var firebaseConfig = {
  
  apiKey: "AIzaSyDu9sVNgLMIoi_6bYUPc8eco5bKYKLCxYo",
  authDomain: "grip-banking-e2cfb.firebaseapp.com",
  projectId: "grip-banking-e2cfb",
  storageBucket: "grip-banking-e2cfb.appspot.com",
  messagingSenderId: "346135955762",
  appId: "1:346135955762:web:39f1f1da43a06c807e6f2b",
  measurementId: "G-P7C1WKC9RC"

};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

