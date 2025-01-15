// const a = 5; //변수 생성
// const b = 2;
// //변수 작성 규칙(camel case)
// //  공백 불가능, 띄어쓰기는 대문자로 구분
// let myName = "ming";
// console.log(a, b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello ", myName);

// myName = "minji";

// console.log("your name is ", myName);

// //#2.4 Booleans(250114)
// const amiFat = null;
// let something;
// console.log(amiFat, something);

// //#2.5 Arrays(250114)
// console.log("--#2.5 Arrays(250114)--");

// //Array 기호 : [] 사용
// const daysOfWeek = ["mon", "thu", "wed", "thu", "fri", "sat"];
// // console.log(daysOfWeek);

// // //Add one more day to the array
// // daysOfWeek.push("sun");

// // console.log(daysOfWeek);

// //Array에 담긴 요소의 개수를 넘은 숫자를 호출할 경우
// console.log(daysOfWeek[8]);

//#2.6 Objects
//게임을 만든다고 가정하자.
// const playerName = "ming";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

//위의 모든 데이터들은 'player'라는 개체에 속하는 특성성이다.
//따라서 우리는 player.name, player.points처럼 player에 속한다는 것이
//확실하게 보이도록 위와같이 사용하고 싶다.

//그렇다면 array를 사용해보면 어떨까?
//array를 사용하면 위의 데이터들을 다 묶을 수는 있지만, 각각의 데이터가
//무엇을 의미하는지 표현할 수가 없다.

//player[0] == name
//player[1] == points ...
//const player = ["ming", 121212, false, "little bit"];

//object를 사용하여보자.
// const player = {
//   name: "ming",
//   points: 10,
//   fat: true,
// };

// console.log(player);

// player.points += 15;
// console.log(player);

//#2.7~8 Functions part One/Two

//function을 사용하지 않을 때 같은 코드가 반복된다. 이것은 좋은 코드가 아니다.
// console.log("Hello my name is ming");
// console.log("Hello my name is Dal");
// console.log("Hello my name is Shigatsu");
// console.log("Hello my name is Flynn");

//반복을 최소한으로 줄이기 위해 function을 사용해보자.
//function은 코드를 캡슐화해서 실행을 여러번 할 수 있게 해준다.

//argument : function을 실행하는 동안 어떤 정보를 function에 보낼 수 있는 방법
// function sayHello(nameOfPerson) {
//   console.log("Hello! my name is " + nameOfPerson);
// }

// sayHello("ming");
// sayHello("faker");
// sayHello("dal");

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("ming", 29);
// sayHello("faker", 31);
// sayHello("dal", 17);

function plus(a, b) {
  console.log(a + b);
}

// function divide(a, b) {
//   console.log(a / b);
// }
// plus(8, 60);
// divide(98, 20);

//object와 function을 함께 사용해보자.
const player = {
  name: "ming",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

//예제
const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  devide: function (a, b) {
    console.log(a / b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
};

calculator.plus(6, 4);
calculator.minus(6, 4);
calculator.devide(6, 4);
calculator.multiply(6, 4);
