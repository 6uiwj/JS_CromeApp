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

const title = document.querySelector("#hello");
console.log(title);
