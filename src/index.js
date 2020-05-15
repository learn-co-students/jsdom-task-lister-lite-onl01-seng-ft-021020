document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function getPostData(event){
    return {
      newTaskDescription: event.target.querySelector("#new-task-description").value
    }
    
  }

  function htmlifyPost(post){
    
    return (`
    <li> ${post.newTaskDescription}
    </li>
    `
    )
    
  }

  function renderPost(htmlPost){
    const taskList = document.querySelector("#tasks")
    taskList.innerHTML += htmlPost

  }

  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", function(event){
    event.preventDefault()
    // debugger
    //grab text from field
    const postText = getPostData(event)
    //put the text in html
    const htmlPost = htmlifyPost(postText)
    //mount the htmlPost
    renderPost(htmlPost)
    
  })

});
