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
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
