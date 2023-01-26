/****************일반 변수에서 ts 이용하기******************* */
let count: number = 0; //숫자
count += 1;
// count = "문자열"; //에러 남

const message: string = "hello world"; //문자열
const done: boolean = true; //불리언
const numbers: number[] = [1, 2, 3]; //숫자 배열
const messages: string[] = ["hello", "world"]; //문자열 배열
// messages.push(1); //숫자 넣으려고 하면 안 됨

/********************object 타입지정*************************** */
let 이름: { name: string } = { name: "Kim" };

/************object에 타입 지정해야 할 속성이 너무 많으면************* */
type Member = {
  [key: string]: string; //글자로 된 모든 object 속성의 타입은 :string
};
let john: Member = { name: "kim", age: "123" };

let mightBeUndefined: string | undefined = undefined; //string일 수도 있고 undefined일 수도 있음
let nullableNumber: number | null = null; //number일 수도 있고 null일 수도 있음

let color: "red" | "orange" | "yellow" = "red"; //red, orange, yellow 중 하나임
color = "yellow";
// color = "green"; //에러 발생

/****************함수에서 ts 이용하기******************* */
function sum(x: number, y: number): number {
  //파라미터 x, y는 number이고, 함수는 number를 반환한다
  return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  //배열의 내장함수를 사용할 때도 타입 유추가 매우 잘 이루어집니다.
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

//함수에서 아무것도 반환하지 않아야 한다면 반환 타입을 void로 설정하면 됩니다.
function returnNothing(): void {
  console.log("I am just saying hello world");
}
