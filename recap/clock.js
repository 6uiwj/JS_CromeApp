const clock = document.querySelector("h2#clock");
function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  const time = `${hour}:${minute}:${second}`;
  clock.innerText = time;
}

getTime();
setInterval(getTime, 1000);
