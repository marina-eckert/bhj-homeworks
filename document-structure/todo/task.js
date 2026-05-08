"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const tasksList = document.getElementById("tasks__list");

  function addTask(taskTitle) {
    const taskTemplate = `
            <div class="task">
                <div class="task__title">${taskTitle}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
    const taskElement = document.createElement("div");
    taskElement.innerHTML = taskTemplate.trim();
    tasksList.appendChild(taskElement.firstChild);
  }

  function removeTask(taskElement) {
    taskElement.remove();
  }

  document.getElementById("tasks__add").addEventListener("click", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("task__input");
    const taskTitle = taskInput.value.trim();

    if (taskTitle !== "") {
      addTask(taskTitle);
      taskInput.value = "";
    }
  });

  tasksList.addEventListener("click", (event) => {
    if (event.target.classList.contains("task__remove")) {
      const taskElement = event.target.closest(".task");
      if (taskElement) {
        removeTask(taskElement);
      }
    }
  });
});
