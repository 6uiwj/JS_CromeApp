// const loginForm = document.getElementById("login-form");
// //loginForm이 Html element 요소이므로 아래와 같이 사용 가능
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// //const loginInput = document.querySelector("#login-form input");
// //const loginButton = document.querySelector("#login-form button");

// function handleLoginBtnClick() {
//   const username = loginInput.value;
//   //   if (username === "" || username === null) {
//   //     alert("Please write your name");
//   //   } else if (username.length > 15) {
//   //     alert("Your name is too long.");
//   //   }
//   console.log(username);
// }

// loginButton.addEventListener("click", handleLoginBtnClick);

//#4.2 Events
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// //브라우저의 기본 동작을 막아줌 (form이 submit되어서 페이지가 새로고침되는 것을 막아줌)
// function onLoginSubmit(event) {
//   event.preventDefault();
//   console.log(loginInput.value);
//   // const username = loginInput.value;
//   // console.log(username);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

//#4.3-4.4
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//   event.preventDefault();
//   const username = loginInput.value;
//   loginForm.classList.add("hidden");
//   console.log(username);
// }

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

//#4.4
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기기

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username); //로컬 스토리지에 username 저장

  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
