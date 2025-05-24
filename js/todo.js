const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// === document.querySelector("todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //todo 목록을 저장할 array

//toDos array의 내용을 localStorage에 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array를 json문자열로 변환해서 storage에 저장
}

//삭제하기 기능을 하는 function
function deleteToDo(event) {
  const li = event.target.parentElement; //선택된 요소의 부모 element
  li.remove(); //요소 제거

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); //요소 제거 후 다시 저장된 todo 호출
}

//입력된 TODO를 그리기
function paintToDo(newToDo) {
  const li = document.createElement("li"); //li태그를 생성
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text; //handleToDoSubmit으로부터 받아옴

  const button = document.createElement("button"); //버튼 생성
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  //spend를 li안에 넣어주자.
  li.appendChild(span);
  li.appendChild(button); //버튼은 li아래에 배치 (span보다 아래에 오도록 span 밑에 작성)
  toDoList.appendChild(li); //ul태그에 li 넣기
}

//todoList가 제출됐을 때 일어날 일 정의 -> 입력된 ToDO 목록이 나타남 (paintToDO function 이용)
function handleToDoSubmit(e) {
  e.preventDefault();
  //input에 입력된 값 저장
  const newToDo = toDoInput.value;
  //enter가 눌리면 input값 비우기
  toDoInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj); //todo 그려주기
  saveToDos(); //toDos arrays를 localStorage에 저장
}

//todoList 제출시 이벤트 만들어주기
toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of " + item);
// }

//localStorage에서 toDo parsing하기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //painToDo를 parsedToDos 배열의 요소마다 실행
}
