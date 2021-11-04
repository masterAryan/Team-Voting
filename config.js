import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyBSQBhRofXuLbVk10CGVjKP9EHHUY_hsQA",
  authDomain: "team-voting-997cd.firebaseapp.com",
  databaseURL: "https://team-voting-997cd-default-rtdb.firebaseio.com",
  projectId: "team-voting-997cd",
  storageBucket: "team-voting-997cd.appspot.com",
  messagingSenderId: "343054300699",
  appId: "1:343054300699:web:5599404d2fd1e3a623aabe"
 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
