  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getFirestore,
    collection,getDocs,onSnapshot,addDoc,deleteDoc,doc,getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyCYgVnArG1tUrXygC0eRGxq8ubA9ywpc6s",

    authDomain: "oscorp-cc7b8.firebaseapp.com",

    projectId: "oscorp-cc7b8",

    storageBucket: "oscorp-cc7b8.appspot.com",

    messagingSenderId: "1086770713166",

    appId: "1:1086770713166:web:57a13c25173c5cdfd5291f"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  export const saveTask = (title, description) => {
    addDoc(collection(db, 'tarea'), {title, description}) 
    // console.log(title, description);

  }

  export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tarea"), callback);

/**
 *
 * @param {string} id Task ID
 */

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));