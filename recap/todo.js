const todoForm = document.querySelector("#todo-form"); //form태그

const todoInput = document.querySelector("#todo-form input"); //input

const todoList = document.querySelector("#todo-list"); //ul 태그
const toDos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

//삭제기능 function
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

//할일 목록 그려주는 함수 + 삭제버튼 추가
function paintToDo(value) {
  const list = document.createElement("li"); //할일 목록
  const span = document.createElement("span"); //삭제하기 버튼
  span.innerText = value; //span태그에 받아온 할일 넣기

  const button = document.createElement("button"); //button 태그 생성
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  list.appendChild(span); //li태그 밑에 span태그 넣기
  list.appendChild(button);
  todoList.appendChild(list); //li 태그 밑에 ul태그 넣기
}

//todo 가 제출됐을 때(이벤트 발생 시) 일어날 함수 -> 제출되면 input value를 저장하고 input을 비우고 li로 입력한 값을 출력한다.
function handleTodoSubmit(e) {
  e.preventDefault(); //form의 기본 동작을 막음
  const value = todoInput.value; //input 값을 저장
  todoInput.value = ""; //input을 비움
  toDos.push(value);
  paintToDo(value); //input 값을 출력
}

todoForm.addEventListener("submit", handleTodoSubmit);
