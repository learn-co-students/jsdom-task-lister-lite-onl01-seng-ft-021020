document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById(`create-task-form`);
  const taskList = document.querySelector("#tasks")
  
  taskForm.addEventListener(`submit`, function(e) {
    e.preventDefault()
    const newTask = document.getElementById("new-task-description").value
    const taskItem = document.createElement("li")
    taskItem.innerText = newTask
    taskList.append(taskItem)
    taskForm.reset()
  });
  
 
});
