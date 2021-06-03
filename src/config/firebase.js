/** Dependencies **/
import firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyD7k0vhjXK-RFrsUbL95fdhqSYzBOVTqAo",
  authDomain: "react-todo-app-92619.firebaseapp.com",
  databaseURL: "https://react-todo-app-92619-default-rtdb.firebaseio.com",
  projectId: "react-todo-app-92619",
  storageBucket: "react-todo-app-92619.appspot.com",
  messagingSenderId: "448380857067",
  appId: "1:448380857067:web:cf2611fca72481838b6cae"
};

firebase.initializeApp(config);

export default firebase.database();
