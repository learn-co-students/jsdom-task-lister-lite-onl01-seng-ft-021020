document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTask(event) {
    text = document.querySelector('#new-task-description').value
    task = document.createElement('li')
    button = document.createElement('button')
    button.setAttribute('class', 'remove-task')
    button.textContent = 'Remove'
    task.textContent = text
    document.getElementById('tasks').appendChild(task).appendChild(button)
    buttons = document.querySelectorAll(".remove-task")
    for (let i = 0; i < buttons.length; i++) {
      console.log(buttons[i])
      buttons[i].addEventListener('click', deleteTask);
    };
    event.preventDefault();
  }

  function deleteTask(event) {
    event.target.parentNode.remove();
    event.preventDefault()
  }

  document.querySelector("#create-task-form").addEventListener('submit', addTask);
});

