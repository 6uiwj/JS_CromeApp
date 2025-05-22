const image = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImg = image[Math.floor(Math.random() * image.length)];
const bg = document.createElement("img");
bg.src = `/image/${chosenImg}`;
document.body.appendChild(bg);
