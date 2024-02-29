import {
    saveuser,
    updateuser,
    getusers,
  } from "./firebase.js";
  
  const userForm = document.getElementById("formSignIn");
  const botonInic = document.getElementById("signIn_btn")
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    const querySnapshot = await getusers();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
  
  botonInic.addEventListener("click", async (e) => {
    e.preventDefault();
  
    const nameU = userForm["user-name"];
    const passU = userForm["user-pass"];
  
    try {
      if (!editStatus) {
        await saveuser(nameU.value, passU.value);
      } else {
        await updateuser(id, {
          name: nameU.value,
          password: passU.value,
        });
  
        editStatus = false;
        id = "";
        userForm["signIn_btn"].innerText = "Save";
      }
  
      userForm.reset();
      nameU.focus();
    } catch (error) {
      console.log(error);
    }
  });