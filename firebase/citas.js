import {
    savecita,
    updatecita,
    getcitas,
  } from "./firebase.js";
  
  const citaForm = document.getElementById("formu");
  const botonInic = document.getElementById("boton1")
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    const querySnapshot = await getcitas();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
  
  botonInic.addEventListener("click", async (e) => {
    e.preventDefault();
  
    const nameU = citaForm["nombre"];
    const telf = citaForm["telefono"];
    const email = citaForm["email"];
    const tipoCita = citaForm["opciones"];
    const mensaje = citaForm["mensaje"];
  
    try {
      if (!editStatus) {
        await savecita(nameU.value, telf.value, email.value, tipoCita.value, mensaje.value);
      } else {
        await updatecita(id, {
          name: nameU.value,
          telf: telf.value,
          email: email.value, 
          tipo: tipoCita.value, 
          mensaje: mensaje.value,
        });
  
        editStatus = false;
        id = "";
        citaForm["boton1"].innerText = "Save";
      }
  
      citaForm.reset();
      nameU.focus();
    } catch (error) {
      console.log(error);
    }
  });