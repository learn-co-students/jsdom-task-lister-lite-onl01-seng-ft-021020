document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(event){
    event.preventDefault();
    let taskList = document.getElementById("tasks");
    let task = document.getElementById("new-task-description").value
    taskList.innerHTML += `<li>${task}</li>`
  });
});
