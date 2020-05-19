document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.querySelector("#submit").addEventListener("click", function(event) {
  event.preventDefault();
  let description = document.querySelector("#new-task-description").value;
  document.querySelector("#tasks").innerHTML += "<li>" + description + "</li>";


}, false);