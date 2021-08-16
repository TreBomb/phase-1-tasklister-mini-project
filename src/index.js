document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`form`).addEventListener(`submit`, (form) => {
    form.preventDefault();

    const task = document.createElement(`p`);
    task.textContent = form.target[`new-task-description`].value;

    const button = document.createElement(`button`);
    button.textContent = `x`;
    button.addEventListener(`click`, (task) => task.target.parentNode.remove());

    task.appendChild(button);
    document.querySelector(`#tasks`).appendChild(task);
  });
});
