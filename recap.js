const title = document.querySelector("h1");

function colorChange() {
  if (title.style.color === "black") {
    title.style.color = "orange";
  } else {
    title.style.color = "black";
  }
}

title.addEventListener("click", colorChange);
