const fruitList = ["사과", "바나나", "오렌지", "포도"];
let now = 0;

const partyId = setInterval(() => {
  console.log(`${fruitList[now]} 축제 타임~`);
}, 200);

const changeId = setInterval(() => {
  const nowFruit = fruitList[now];
  if (now < 3) {
    now += 1;
  } else {
    now = 0;
  }
  console.log(`과일 변환! ${nowFruit}->${fruitList[now]}`);
}, 1000);

const finishPartyId = setTimeout(() => {
  console.log("파티 종료!");
  clearInterval(partyId);
  clearInterval(changeId);
}, 5000);
