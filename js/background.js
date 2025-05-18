const images = ["0.jpg", "1.jpg", "2.jpg"];

//이미지 랜덤으로 담기
const chosenImage = images[Math.floor(Math.random() * images.length)];

//자바스크립트로 html에 새로운 요소 추가하기 <img>
const bgImage = document.createElement("img");

//<img src="image/0.jpg">와 같은 형태로 추가가
bgImage.src = `image/${chosenImage}`;

//위에서 만든 태그를 body태그 안에 추가
document.body.appendChild(bgImage);
