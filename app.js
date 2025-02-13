const loginForm = document.getElementById("login-form");
//loginForm이 Html element 요소이므로 아래와 같이 사용 가능
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  const username = loginInput.value;
  if (username === "" || username === null) {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", handleLoginBtnClick);
