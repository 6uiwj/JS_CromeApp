const todoForm = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo-form input");

function handleTodoSubmit(e) {
  e.preventDefault();
  console.log(todoInput.value);
}

todoForm.addEventListener("submit", handleTodoSubmit);
