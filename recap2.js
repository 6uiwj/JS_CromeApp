const loginForm = document.querySelector("#login-form"); //form
const inputText = document.querySelector("#login-form input"); //input
const greeting = document.querySelector("#greeting"); //h1
// OK

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기기
const USERNAME_KEY = "username";

function submitForm(event) {
  //submit 이벤트
  //form이 submit되면
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); //form 숨기기
  const username = inputText.value;
  localStorage.setItem(USERNAME_KEY, username); //input value를 localStorage에에 저장
  //   greeting.innerText = "Hello " + username;
  //   greeting.classList.remove("hidden"); //h1 나타나게 하기
  paintGreeting(username);
}

loginForm.addEventListener("submit", submitForm); //form이 submit 되면 submitForm 실행

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`; //greeting에 text 추가 (localStorage에서 username 가져오기 )
  greeting.classList.remove(HIDDEN_CLASSNAME); //greeting에 hidden 클래스 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //storage에 값이 없으면면
  loginForm.classList.remove(HIDDEN_CLASSNAME); //form을 나타냄
  //**주의  */
  loginForm.addEventListener("submit", submitForm); //form이 submit 되면 submitForm 실행
} else {
  //loginForm.classList.add("hidden"); //form 숨기기
  paintGreeting(savedUsername);
}

//paintGreeting 문제 아님
