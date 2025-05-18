const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === document.querySelector("todo-form input");
const toDoList = document.getElementById("todo-list");

//todoList가 제출됐을 때 일어날 일 정의
function handleToDoSubmit(e) {
  e.preventDefault();
  //input에 입력된 값 저장
  const newToDo = toDoInput.value;
  //enter가 눌리면 input값 비우기
  toDoInput.value = "";
  console.log(newToDo, toDoInput.value);
}

//todoList 제출시 이벤트 만들어주기
toDoForm.addEventListener("submit", handleToDoSubmit);
