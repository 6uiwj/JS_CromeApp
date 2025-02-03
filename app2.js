//#3.0 The Docoument Object
//object
//document : 내가 작성한 HTML을 가져올 수 있다.

// const title = document.getElementById("title");

// //console.dir(title);
// title.innerText = "Got you!";
// //console.log(title.id);
// console.log(title.className);

//#3.2
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

//const title = document.getElementsByTagName("h1");
// const title = document.querySelectorAll(".hello h1");
// console.log(title);

//const title = document.querySelector("#hello");
//console.log(title);
//const title = document.getElementsByTagName("h1");

//#3.3 Events
//class 이름이 "hello"인 div들 중애 첫 번째인 div 내부의 h1을 가져온다.
const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);
// title.style.color = "blue";

function handleTitleClick() {
  title.style.color = "blue";
}

//클릭 이벤트
//'클릭'이벤트가 발생하면 handleTitleClick을 실행하라!
title.addEventListener("click", handleTitleClick);
