const quotes = [
  {
    quote: "깊은 강은 소리를 내지 않는다",
    author: "퀸틸리아누스(Quintilian)",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할것이다",
    author: "파울로 코엘료",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote:
      "먼저 핀 꽃은 먼저진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다",
    author: "채근담",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드",
  },
  {
    quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든 믿는 대로 될 것이다",
    author: "헨리 포드",
  },
  {
    quote:
      "인생에서 원하는 것을 엇기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다",
    author: "에머슨",
  },
  {
    quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다",
    author: "하버트 개서",
  },
  {
    quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다",
    author: "동아프리카 속담",
  },
];

const quote = document.querySelector("#quote span:first-child"); //id="quote" 안의 첫번째 span 태그
const author = document.querySelector("#quote span:last-child"); //id="quote" 안의 마지막 span 태그
const length = quotes.length; //quotes의 길이
const todaysQuote = quotes[Math.floor(Math.random() * length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
