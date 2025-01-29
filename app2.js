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
function plus(a, b) {
  console.log(a + b);
}

function minus(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}
function divide(a, b) {
  console.log(a / b);
}

function power(a, b) {
  console.log(a ** b);
}

const cal = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    if (b === 0) {
      console.log("can't divide");
    } else {
      console.log(a / b);
    }
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};
