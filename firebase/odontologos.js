import {
    saveOdont,
    updateOdont,
    getOdonts,
  } from "./firebase.js";
  
  const OdontForm = document.getElementById("formu");
  const botonInic = document.getElementById("boton1")
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    const querySnapshot = await getOdonts();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
  
  botonInic.addEventListener("click", async (e) => {
    e.preventDefault();
  
    const nameU = OdontForm["nombre"];
    const telf = OdontForm["telefono"];
    const email = OdontForm["email"];
    const tipoOdont = OdontForm["opciones"];
  
    try {
      if (!editStatus) {
        await saveOdont(nameU.value, telf.value, email.value, tipoOdont.value);
      } else {
        await updateOdont(id, {
          name: nameU.value,
          telf: telf.value,
          email: email.value, 
          tipo: tipoOdont.value, 
        });
  
        editStatus = false;
        id = "";
        OdontForm["boton1"].innerText = "Save";
      }
  
      OdontForm.reset();
      nameU.focus();
    } catch (error) {
      console.log(error);
    }
  });