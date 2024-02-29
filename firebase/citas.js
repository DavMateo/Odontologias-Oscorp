import {
    savecita,
    updatecita,
    getcitas,
    onGetcitas,
    deletecita,
    getcita
  } from "./firebase.js";
  
  const citaForm = document.getElementById("formu");
  const botonInic = document.getElementById("boton1");
  const citasContainer = document.getElementById("containerCita");
  
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

  // window.addEventListener("DOMContentLoaded", async (e) => {
  //   const querySnapshot = await getcitas();
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.data());
  //   });
  
  //   onGetcitas((querySnapshot) => {
  //     citasContainer.innerHTML = "";
  
  //     querySnapshot.forEach((doc) => {
  //       const cita = doc.data();
  
  //       citasContainer.innerHTML += `
  //       <div class="card card-body mt-2 border-primary">
  //     <h3 class="h5">${cita.title}</h3>
  //     <p>${cita.description}</p>
  //     <div>
  //       <button class="btn btn-primary btn-delete" data-id="${doc.id}">
  //         🗑 Delete
  //       </button>
  //       <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
  //         🖉 Edit
  //       </button>
  //     </div>
  //   </div>`;
  //     });
  
  //     const btnsDelete = citasContainer.querySelectorAll(".btn-delete");
  //     btnsDelete.forEach((btn) =>
  //       btn.addEventListener("click", async ({ target: { dataset } }) => {
  //         try {
  //           await deletecita(dataset.id);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       })
  //     );
  
  //     const btnsEdit = citasContainer.querySelectorAll(".btn-edit");
  //     btnsEdit.forEach((btn) => {
  //       btn.addEventListener("click", async (e) => {
  //         try {
  //           const doc = await getcita(e.target.dataset.id);
  //           const cita = doc.data();
  //           citaForm["cita-title"].value = cita.title;
  //           citaForm["cita-description"].value = cita.description;
  
  //           editStatus = true;
  //           id = doc.id;
  //           citaForm["btn-cita-form"].innerText = "Update";
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       });
  //     });
  //   });
  // });