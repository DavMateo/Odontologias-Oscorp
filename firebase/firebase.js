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


  // Login
  export const saveuser = (nameU, passU) => {
    addDoc(collection(db, 'users'), {nameU, passU}) 

  }

  export const onGetusers = (callback) =>
  onSnapshot(collection(db, "users"), callback);

export const getuser = (id) => getDoc(doc(db, "users", id));

export const updateuser = (id, newFields) =>
  updateDoc(doc(db, "users", id), newFields);

export const getusers = () => getDocs(collection(db, "users"));


// Citas
export const savecita = (nameU, telf, email, tipoCita, mensaje) => {
  addDoc(collection(db, 'citas'), {nameU, telf, email, tipoCita, mensaje}) 

}

export const onGetcitas = (callback) =>
onSnapshot(collection(db, "citas"), callback);

export const getcita = (id) => getDoc(doc(db, "citas", id));

export const updatecita = (id, newFields) =>
updateDoc(doc(db, "citas", id), newFields);

export const getcitas = () => getDocs(collection(db, "citas"));