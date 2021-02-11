import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAoeRYfvCrrAsUivW3Mt8B4CWWFbFFPZgw",
  authDomain: "just-project-learn.firebaseapp.com",
  projectId: "just-project-learn",
  storageBucket: "just-project-learn.appspot.com",
  messagingSenderId: "246892033091",
  appId: "1:246892033091:web:91ae2b5bb377dccaae50f6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
