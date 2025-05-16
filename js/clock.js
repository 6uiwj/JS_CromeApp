//#5.0
// const clock = document.querySelector("h2#clock");

// function getClock() {
//   console.log("hello");
// }

// //setInterval(호출할 함수, 호출할 주기)
// setInterval(sayHello, 5000);

// //setTimeout(호출할 함수, 얼마나 기다릴지)
// setTimeout(sayHello, 5000);

//#5.1

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);
