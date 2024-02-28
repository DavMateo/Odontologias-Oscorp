import {saveTask} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {

});

const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const title = taskForm["task-title"];
    const description = taskForm["task-description"];
  
    // try {
    //   if (!editStatus) {
    //     await saveTask(title.value, description.value);
    //   } else {
    //     await updateTask(id, {
    //       title: title.value,
    //       description: description.value,
    //     });
  
    //     editStatus = false;
    //     id = "";
    //     taskForm["btn-task-form"].innerText = "Save";
    //   }
  
    //   taskForm.reset();
    //   title.focus();
    // } catch (error) {
    //   console.log(error);
    // }

    saveTask(title.value, description.value);
  });