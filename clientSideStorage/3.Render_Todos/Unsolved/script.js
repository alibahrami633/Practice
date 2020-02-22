var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // add the text to todos list
    todos.push(todoInput.value);

    for (var i = 0; i < todos.length; i++) {
        var listItem = document.createElement("li");               
        todoList.append(listItem);            
     }

    //  for (var i = 0; i < todos.length; i++) {
    //     listItem.textContent = todos[i]; 
    //  }


    

    
});