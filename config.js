import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDRVd9grZuPVQkUo9n9BLSDjEuI9b60Has",
  authDomain: "proyecto-71.firebaseapp.com",
  projectId: "proyecto-71",
  storageBucket: "proyecto-71.appspot.com",
  messagingSenderId: "1084399647347",
  appId: "1:1084399647347:web:0cf49e4face3af95c04806"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
