import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyADsRtQjqRoU7eObQ56coohlpWq-C8fPrs",
  authDomain: "grip-banking.firebaseapp.com",
  databaseURL: "https://grip-banking-default-rtdb.firebaseio.com",
  projectId: "grip-banking",
  storageBucket: "grip-banking.appspot.com",
  messagingSenderId: "529269905953",
  appId: "1:529269905953:web:704d29ff61b9cb58cce160"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

