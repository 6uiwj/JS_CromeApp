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
//const title = document.querySelector("div.hello:first-child h1");

// // console.dir(title);
// // title.style.color = "blue";

// function handleTitleClick() {
//   title.style.color = "blue";
// }

// //클릭 이벤트
// //'클릭'이벤트가 발생하면 handleTitleClick을 실행하라!
// title.addEventListener("click", handleTitleClick);

//#3.4 Events part two
//console.dir(title);
// const title = document.querySelector("div.hello:first-child h1");
// function handleMouseEnter() {
//   title.innerText = "Mouse is here";
// }
// function handleTitleClick() {
//   title.style.color = "blue";
// }
// function handleMouseLeave() {
//   title.innerText = "Mouse is gone!";
// }

// //title.addEventListener("click", handleTitleClick);
// //title.addEventListener("mouseenter", handleMouseEnter);
// //title.addEventListener("mouseleave", handleMouseLeave);
// //#3.5 Events

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;

// //window의 eventlistener

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copier!");
// }
// //resize :화면 크기가 변경
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);

// //Connetion Event(Wifi)
// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//   alert("ALL GOOOD");
// }
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

//#3.6 CSS in Javascript
//h1 색깔 누를때마다 tomato <-> blue 로 변경되게 하기
//const h1 = document.querySelector("div.hello:first-child h1");
// function handleMouseEnter() {
//   const currentColor = h1.style.color; //현재 컬러
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor; //변경한 컬러를 h1에 적용
// }

//h1.addEventListener("click", handleMouseEnter);

//#3.7 CSS in Javascipt part Two
// function handleTitleClick() {
//   const clickedClass = "active";
//   if (h1.className === clickedClass) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
// }
// h1.addEventListener("click", handleTitleClick);

//#3.8 CSS in Javascript part Three
const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);
