//alert("hi");
// const a = 3.52;
// console.log(typeof a);
// const name = "ming";
// console.log("my name is " + name);

//class 이름이 hello인 div에서 첫번째 자식 h1 선택
const title = document.querySelector("div.hello:first-child h1");

function changeColor() {
  title.style.color = "blue";
}

console.dir(title);

function enterChaneWord() {
  title.innerText = "진짜루?";
}

function leaveChaneWord() {
  title.innerText = "웅 지짜루";
}

title.addEventListener("click", changeColor);
title.addEventListener("mouseenter", enterChaneWord);
title.addEventListener("mouseleave", leaveChaneWord);
