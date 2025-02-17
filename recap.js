const lf = document.getElementById("login-form");
const btn = document.querySelector("button");
const value = document.querySelector("input");

function clickEvent() {
  console.log(value.value);
}

btn.addEventListener("click", clickEvent);
